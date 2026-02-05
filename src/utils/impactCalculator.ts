export interface ImpactEquivalences {
  turtlesSaved: number;
  bottlesRecycled: number;
  co2KmCompensated: number;
}

export const calculateImpact = (weightInKg: number): ImpactEquivalences => {
  // Conversions basées sur des estimations réalistes
  const bottlesPerKg = 20; // ~20 bouteilles plastique par kg
  const kgPerTurtle = 5; // 5kg de plastique = 1 tortue sauvée
  const co2PerKg = 1.4; // 1kg plastique = ~1.4kg CO2, 1kg CO2 = ~10km en voiture

  return {
    turtlesSaved: Math.floor(weightInKg / kgPerTurtle),
    bottlesRecycled: Math.floor(weightInKg * bottlesPerKg),
    co2KmCompensated: Math.floor(weightInKg * co2PerKg * 10)
  };
};

export const getMonthlyProgress = (currentWeight: number) => {
  // Mock data pour les 3 derniers mois avec progression réaliste
  const currentMonth = new Date().getMonth();
  const months = ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Jun', 'Jul', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
  
  const baseWeight = Math.max(0, currentWeight - 15); // Poids il y a 3 mois
  const monthlyIncrease = (currentWeight - baseWeight) / 3;
  
  return [
    { 
      month: months[(currentMonth - 2 + 12) % 12], 
      kg: Math.round(baseWeight) 
    },
    { 
      month: months[(currentMonth - 1 + 12) % 12], 
      kg: Math.round(baseWeight + monthlyIncrease) 
    },
    { 
      month: months[currentMonth], 
      kg: Math.round(currentWeight) 
    }
  ];
};
