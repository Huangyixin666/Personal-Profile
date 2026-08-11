"use client";

import { useState } from "react";
import { archiveLayout } from "../../../config/archiveLayout";
import { archiveFolders } from "../data/archiveFolders";
import { ArchiveFolder } from "./ArchiveFolder";
import { PersonalOriginFolder } from "../personal-origin/components/PersonalOriginFolder";

export function ArchiveFolders() {
  const [activeFolderId, setActiveFolderId] = useState<string | null>(null);
  return (
    <>
      <PersonalOriginFolder layout={archiveLayout.folders.origin} />
      {archiveFolders.filter((folder) => folder.id !== "origin").map((folder) => <ArchiveFolder
        key={folder.id}
        folder={folder}
        layout={archiveLayout.folders[folder.id]}
        isOpen={activeFolderId === folder.id}
        onToggle={() => setActiveFolderId((current) => current === folder.id ? null : folder.id)}
      />)}
    </>
  );
}
