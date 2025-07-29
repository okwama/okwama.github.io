import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { GoStar } from 'react-icons/go';

export const WebsitePreview = ({ website }) => {
    const hasLiveDemo = website.url && website.url !== "#";
    const hasGitHub = website.githubUrl && website.githubUrl !== "#";

    return (
        <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-300">
            {/* Website Preview Image */}
            <div className="relative h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                {website.image ? (
                    <img 
                        src={website.image} 
                        alt={website.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="text-6xl">🌐</div>
                )}
                
                {/* Overlay with action buttons */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {hasLiveDemo && (
                        <Link 
                            href={website.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                            <FaPlay className="w-4 h-4" />
                            Live Demo
                        </Link>
                    )}
                    {hasGitHub && (
                        <Link 
                            href={website.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors"
                        >
                            <FaGithub className="w-4 h-4" />
                            Code
                        </Link>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-white transition-colors">
                        {website.name}
                    </h3>
                    {website.featured && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                            Featured
                        </span>
                    )}
                </div>
                
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    {website.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {website.technologies?.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-zinc-800 text-zinc-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                
                {/* Action Links */}
                <div className="flex gap-3">
                    {hasLiveDemo && (
                        <Link 
                            href={website.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <FaExternalLinkAlt className="w-3 h-3" />
                            Visit Website
                        </Link>
                    )}
                    {hasGitHub && (
                        <Link 
                            href={website.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
                        >
                            <FaGithub className="w-3 h-3" />
                            View Code
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}; 