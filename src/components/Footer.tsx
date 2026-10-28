import Image from "next/image";

export default function Footer() {
  return <footer className="editorial-footer"><a href="#top" aria-label="Nathapoom — Back to top"><Image src="/brand/nathapoom-mark.png" alt="Nathapoom N logo" width={40} height={40} className="brand-mark" /></a><span>© {new Date().getFullYear()} Nathapoom Wangsatang</span><a href="#top">Back to top ↑</a></footer>;
}
