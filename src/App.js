import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ResearchPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Your Name Here</h1>
        <p className="text-xl text-gray-600">Microbiome & Stem Cell Researcher</p>
        <div className="mt-4 flex justify-center space-x-6 text-gray-700">
          <a href="mailto:your.email@example.com" aria-label="Email">
            <Mail size={24} />
          </a>
          <a href="https://github.com/yourgithub" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">M9 Media Co-culture Studies</h2>
            <p className="text-gray-700">
              Exploring bacterial and fungal interactions across time points using M9 minimal media. Analyzing how bacteria A and B influence fungal growth.
            </p>
            <Button variant="outline" className="mt-4">Read More</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Termite Microbiome Sequencing</h2>
            <p className="text-gray-700">
              Using nanopore sequencing to identify microbial species in termite gut samples. HPC-based analysis pipelines developed for long-read data.
            </p>
            <Button variant="outline" className="mt-4">Explore Results</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Stem Cell & Cancer Research</h2>
            <p className="text-gray-700">
              Investigating the role of stem cells in tissue regeneration and cancer. Focused on pluripotency and cancer stem cell regulation.
            </p>
            <Button variant="outline" className="mt-4">Learn More</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700">
              Background, academic journey, and passion for microbiome and stem cell research.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Publications & Preprints</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>2024 - Fungal-Bacterial Interactions in M9 Media (bioRxiv)</li>
              <li>2025 - Termite Gut Microbiota via Nanopore (in prep)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-700">Feel free to reach out for collaborations or academic inquiries.</p>
            <Button className="mt-4" onClick={() => window.location = "mailto:your.email@example.com"}>
              Email Me
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Blog</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>May 2025 - Tips for Analyzing Nanopore Data on HPC</li>
              <li>Apr 2025 - Co-culture Dynamics: Designing M9 Experiments</li>
              <li>Mar 2025 - Why I Study Termite Guts and What They Teach Us</li>
            </ul>
            <Button variant="outline" className="mt-4">Read Blog</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
