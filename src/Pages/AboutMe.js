export default function AboutMe() {
  return (
    <section className="about-section section-shell" id="about-me" aria-labelledby="about-title">
      <div className="section-head"><h2 id="about-title">About me</h2></div>
      <div className="about-layout">
        <div className="about-story">
          <p className="large-copy">I started my degree planning to be a programmer. What I kept coming back to was everything underneath the code: operating systems, networking, virtualization and hardware.</p>
          <p>Most of what I know about running systems comes from my home lab. When I hit software I haven't used before, I read up on it and work at it until it runs.</p>
          <p>I'm also the IT guy for my family. My mom works from home, so her setup has to work. When my uncle had a Wi-Fi dead spot in his house, I found it and fixed it with an extender.</p>
          <p>At school I've designed networks segmented into VLANs in Cisco Packet Tracer. At home I've built PCs and worked with Raspberry Pis, switches, routers and cabling.</p>
          <p>Lately I'm most interested in how AI runs behind the scenes. Further out, I'd like to move toward security or systems architecture.</p>
        </div>
        <div className="experience">
          <div className="experience-entry"><p className="eyebrow">Finishing April 2027</p><h3>Conestoga College</h3><p>Bachelor of Computer Science</p></div>
          <div className="experience-entry"><p className="eyebrow">May 2024 – present</p><h3>Canadian Tire</h3><p>Sales Associate</p></div>
          <div className="experience-entry"><p className="eyebrow">Sep 2021 – Aug 2023</p><h3>Foodland</h3><p>Supervisor</p></div>
          <div className="experience-entry"><p className="eyebrow">Languages</p><p>C, C++, C#, Python, Java, JavaScript</p></div>
        </div>
      </div>
    </section>
  );
}
