
import { Link } from 'react-router-dom';
import { FolderKanban, ArrowUpRight } from 'lucide-react';

// Reusable page heading
export function Heading({ eyebrow, title, copy, action }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && (
          <div className="text-[10px] font-black tracking-[.15em] text-slate-400">
            {eyebrow}
          </div>
        )}

        <h1 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
          {title}
        </h1>

        {copy && (
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            {copy}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}

// Reusable project card
export function ProjectLink({ project }) {
  if (!project) return null;

  return (
    <Link
      to={`/projects/${project.id}`}
      className="card group block p-5 transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
            <FolderKanban size={19} />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              {project.title || project.name || 'Untitled Project'}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              {project.category || project.status || 'Project'}
            </p>
          </div>
        </div>

        <ArrowUpRight
          size={18}
          className="text-slate-400 transition group-hover:text-emerald-600"
        />
      </div>

      {project.description && (
        <p className="mt-4 line-clamp-2 text-sm text-slate-500">
          {project.description}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        {project.budget && (
          <span className="text-sm font-bold text-emerald-700">
            {project.budget}
          </span>
        )}

        {project.skills && (
          <span className="text-xs text-slate-500">
            {Array.isArray(project.skills)
              ? project.skills.slice(0, 3).join(' · ')
              : project.skills}
          </span>
        )}
      </div>
    </Link>
  );
}

// Reusable empty state
export function Empty({ title, copy }) {
  return (
    <div className="card p-8 text-center">
      <div className="mx-auto mb-3 w-fit rounded-xl bg-emerald-50 p-3 text-emerald-700">
        <FolderKanban size={22} />
      </div>

      <h3 className="font-bold text-slate-900">
        {title || 'Nothing here yet'}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {copy || 'Your items will appear here.'}
      </p>
    </div>
  );
}
