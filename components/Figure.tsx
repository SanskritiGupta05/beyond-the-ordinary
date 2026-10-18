import Image from "next/image";
import { getImage } from "@/lib/content";

interface Props {
  id: string;
  className?: string;
  /** Hide caption/credit (e.g. inside cards). Credits are still listed on the page's sources. */
  bare?: boolean;
  priority?: boolean;
  sizes?: string;
  /** Natural aspect ratio instead of cropping to the container. */
  natural?: boolean;
}

export function Figure({ id, className = "", bare, priority, sizes = "(max-width: 900px) 100vw, 60vw", natural }: Props) {
  const img = getImage(id);
  const picture = natural ? (
    <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes={sizes} priority={priority} />
  ) : (
    <Image src={img.src} alt={img.alt} fill sizes={sizes} priority={priority} style={{ objectPosition: img.focus ?? "50% 50%" }} />
  );
  if (bare) return <div className={`figure__img ${className}`}>{picture}</div>;
  return (
    <figure className={`figure ${className}`}>
      <div className="figure__img">{picture}</div>
      <figcaption>
        <span>{img.caption}</span>
        <span className="credit">
          {img.attribution}
          {" · "}
          <a href={img.sourceUrl} rel="noopener">
            source
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
