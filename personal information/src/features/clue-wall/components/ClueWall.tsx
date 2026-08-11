"use client";

import { useState } from "react";
import type { ClueItem } from "../../../shared/types/archive";
import { DesignCorridor } from "../../design-corridor";
import { clueConnections } from "../data/clueConnections";
import { clueItems } from "../data/clueItems";
import { ChecklistCard } from "./ChecklistCard";
import { InteractivePaper } from "./InteractivePaper";
import { MapFragment } from "./MapFragment";
import { NewspaperCard } from "./NewspaperCard";
import { PaperDetailModal } from "./PaperDetailModal";
import { PhotoCard } from "./PhotoCard";
import { Postcard } from "./Postcard";
import { RedStringLayer } from "./RedStringLayer";
import { StickyNote } from "./StickyNote";
import { TicketCard } from "./TicketCard";
import styles from "../styles/clueWall.module.css";

function contentFor(item: ClueItem) {
  switch (item.type) {
    case "newspaper": return <NewspaperCard item={item} />;
    case "postcard": return <Postcard item={item} />;
    case "sticky": return <StickyNote item={item} />;
    case "photo": return <PhotoCard item={item} />;
    case "checklist": return <ChecklistCard item={item} />;
    case "ticket": return <TicketCard item={item} />;
    case "map": return <MapFragment item={item} />;
  }
}

export function ClueWall() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<ClueItem | null>(null);
  const [corridorOpen, setCorridorOpen] = useState(false);
  const highlightedId = selectedItem?.id ?? hoveredId;

  return (
    <section className={styles.clueWall} aria-label="经历与作品线索墙">
      <RedStringLayer items={clueItems} connections={clueConnections} highlightedId={highlightedId} />
      {clueItems.map((item) => (
        <InteractivePaper
          key={item.id}
          item={item}
          active={selectedItem?.id === item.id}
          onHover={setHoveredId}
          onOpen={(openedItem)=>{
            if(openedItem.id==="design"){setCorridorOpen(true);return;}
            if(openedItem.id==="research"){window.location.assign("/room");return;}
            setSelectedItem(openedItem);
          }}
          className={styles[item.type]}
        >
          {contentFor(item)}
        </InteractivePaper>
      ))}
      <PaperDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      <DesignCorridor open={corridorOpen} onClose={()=>setCorridorOpen(false)}/>
    </section>
  );
}
