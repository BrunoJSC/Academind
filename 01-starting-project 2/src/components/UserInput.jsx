export function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investiment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestiment}
            onChange={(event) =>
              handleChange("initialInvestiment", event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investiment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestiment}
            onChange={(event) =>
              onChange("annualInvestiment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
