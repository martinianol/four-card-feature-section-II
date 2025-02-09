import Calculator from "../assets/icon-calculator.svg";
import Karma from "../assets/icon-karma.svg";
import TeamBuilder from "../assets/icon-team-builder.svg";
import Supervisor from "../assets/icon-supervisor.svg";

// ✅ Function to get an icon by name
export const getIcon = (name) => {
  const icons = {
    calculator: Calculator,
    karma: Karma,
    supervisor: Supervisor,
    "team-builder": TeamBuilder,
  };

  return icons[name] || Calculator; // Returns Calculator as default
};
