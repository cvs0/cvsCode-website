"use client";

import BoldHeading from "@/components/bold-heading";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { getRepoReleases } from "@/lib/github";
import { useEffect, useState } from "react";
import { SiLinux, SiMacos, SiWindows11 } from "react-icons/si";

interface Release {
  name: string;
  assets: { browser_download_url: string }[];
}

const DownloadPage = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [selectedReleaseName, setSelectedReleaseName] = useState<string>("");

  useEffect(() => {
    async function fetchReleases() {
      const releasesData = await getRepoReleases("cvs0", "cvsCode");
      setReleases(releasesData);
    }

    fetchReleases();
  }, []);

  const handleDownload = () => {
    const selectedRelease = releases.find((release) => release.name === selectedReleaseName);
    if (selectedRelease) {
      const version = selectedRelease.name.replace('CVSCode ', '');
      const tag = `${version}`;
      const downloadUrl = `https://github.com/cvs0/CVSCode/archive/refs/tags/${tag}.zip`;
      window.open(downloadUrl, "_blank");
    } else {
      console.error("No release found for the selected version.");
    }
  };
  

  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="text-center mt-10">
        <BoldHeading heading="Download" />
      </div>

      <Separator className="mt-5 bg-gray-200 dark:bg-gray-700" />

      <div className="flex justify-center mt-10">
        <Select
          value={selectedReleaseName}
          onValueChange={setSelectedReleaseName}
        >
          <SelectTrigger className="w-[180px] focus:ring-0">
            <SelectValue placeholder="Select download type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Releases</SelectLabel>
              {releases.map((release, index) => (
                <SelectItem key={index} value={release.name}>
                  <span className="text-blue-500">{release.name}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-center mt-5">
        <Button size="lg" className="font-semibold" onClick={handleDownload}>
          Download
        </Button>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="flex items-center justify-center mr-4 ml-4">
          <SiWindows11 className="mr-6 ml-7" size={40} />
          <SiMacos className="mr-6" size={40} />
          <SiLinux className="mr-6" size={40} />
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
