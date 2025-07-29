import React, { Suspense } from "react";
import { Navigation } from "../components/nav";
import { WebsitePreview } from "../components/website-preview";
import data from "../../data.json";

export default function WebsitesPage() {
    const websites = data.websites || [];

    return (
        <div className="relative pb-16">
            <Suspense fallback={<div className="h-16 bg-zinc-900/0 border-transparent" />}>
                <Navigation />
            </Suspense>
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-12 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Live Websites & Demos
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Explore my web applications with live demos and source code links.
                    </p>
                </div>

                {websites.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {websites.map((website) => (
                            <WebsitePreview key={website.name} website={website} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🌐</div>
                        <h3 className="text-xl font-semibold text-zinc-200 mb-2">No websites added yet</h3>
                        <p className="text-zinc-400">
                            Add your websites to the data.json file to see them here.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
} 