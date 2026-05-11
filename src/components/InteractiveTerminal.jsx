import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TerminalWindow } from './TerminalWindow.jsx';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';

const commandShortcuts = ['projects', 'project 1', 'project 2', 'project 3', 'skills', 'contact', 'resume'];

export function InteractiveTerminal() {
  const navigate = useNavigate();
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState([
    { command: 'whoami', output: `${profile.name} - ${profile.title}` },
    { command: 'stack --core', output: profile.primaryStack.join(', ') },
    { command: 'tools --daily', output: 'Git, GitHub, Docker, Postman, Linux, CI/CD' }
  ]);

  const projectCommands = useMemo(() => projects.map((project, index) => `project ${index + 1}: ${project.name}`), []);

  function runCommand(rawCommand) {
    const normalized = rawCommand.trim().toLowerCase();

    if (!normalized) {
      return;
    }

    const routeMap = {
      home: '/',
      projects: '/projects',
      work: '/projects',
      skills: '/about',
      about: '/about',
      contact: '/contact',
      resume: '/resume',
      cv: '/resume'
    };

    const projectMatch = normalized.match(/^project\s+([1-3])$/);

    if (projectMatch) {
      const project = projects[Number(projectMatch[1]) - 1];
      setHistory((items) => [...items, { command: rawCommand, output: `Opening ${project.name}...` }]);
      navigate(project.url);
      return;
    }

    if (routeMap[normalized]) {
      setHistory((items) => [...items, { command: rawCommand, output: `Routing to ${routeMap[normalized]}` }]);
      navigate(routeMap[normalized]);
      return;
    }

    if (normalized === 'help') {
      setHistory((items) => [
        ...items,
        { command: rawCommand, output: 'Try: projects, project 1, project 2, project 3, skills, contact, resume' }
      ]);
      return;
    }

    setHistory((items) => [...items, { command: rawCommand, output: 'Command not found. Type help.' }]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    runCommand(command);
    setCommand('');
  }

  return (
    <TerminalWindow title="oluwafemi@portfolio:~">
      <div className="grid gap-3">
        {history.slice(-5).map((item, index) => (
          <div key={`${item.command}-${index}`}>
            <code className="block font-black">
              <span className="mr-2 inline-block">$</span> {item.command}
            </code>
            <p>{item.output}</p>
          </div>
        ))}
      </div>

      <div className="my-4 grid gap-2">
        <p className="text-xs font-black uppercase">Quick commands</p>
        <div className="flex flex-wrap gap-2">
          {commandShortcuts.map((item) => (
            <button
              className="border-2 border-black bg-white px-2.5 py-1.5 text-xs font-black transition hover:bg-black hover:text-white"
              key={item}
              onClick={() => runCommand(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid gap-1 text-xs">
          {projectCommands.map((item) => (
            <span className="font-black" key={item}>{item}</span>
          ))}
        </div>
      </div>

      <form className="flex items-center gap-2 border-t-2 border-black pt-4" onSubmit={handleSubmit}>
        <label className="font-black" htmlFor="terminal-command">
          $
        </label>
        <input
          className="min-w-0 grow bg-transparent font-black outline-none placeholder:text-neutral-500"
          id="terminal-command"
          onChange={(event) => setCommand(event.target.value)}
          placeholder="type help"
          value={command}
        />
        <button className="border-2 border-black bg-black px-3 py-2 text-xs font-black text-white shadow-[4px_4px_0_#22d3ee]" type="submit">
          Run
        </button>
      </form>
    </TerminalWindow>
  );
}
