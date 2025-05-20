import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ResearchPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Pramod Prakash</h1>
        <p className="text-xl text-gray-600">PhD Student @ Indian Institute Of Science Education And Research</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="mailto:your.email@example.com"><Mail /></a>
          <a href="https://github.com/yourgithub"><Github /></a>
          <a href="https://linkedin.com/in/yourlinkedin"><Linkedin /></a>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2"> Microbial Studies</h2>
            <p className="text-gray-700">Exploring bacterial and fungal interactions across time points using M9 minimal media. Analyzing how bacteria A and B influence fungal growth.</p>
            <Button variant="outline" className="mt-4">Read More</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Bioinformatics</h2>
            <p className="text-gray-700">check the all publications here.</p>
            <Button variant="outline" className="mt-4">Explore Results</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Patents</h2>
            <p className="text-gray-700"> designs are here.</p>
            <Button variant="outline" className="mt-4">Learn More</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700">PhD student at IISER with a passion for microbiome and stem cell research. My academic journey explores microbial interactions, host-microbiota dynamics, and the application of stem cell biology in regenerative medicine and cancer therapy.</p>
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
            <p className="text-gray-700">Feel free to reach out for collaborations, academic inquiries, or project discussions.</p>
            <Button className="mt-4">Email Me</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Blog</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>May 2025 - Tips for Analyzing Nanopore Data</li>
              <li>Apr 2025 - Co-culture Dynamics</li>
              <li>Mar 2025 - Why I Study Termite Guts and What They Teach Us</li>
            </ul>
            <Button variant="outline" className="mt-4">Read Blog</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
