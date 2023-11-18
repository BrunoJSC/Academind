import { CORE_CONCEPTS } from "../../src/data.js";
import { CoreConcept } from "../../src/components/CoreConcept.jsx";

export function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.image}
          />
        ))}
      </ul>
    </section>
  );
}
