
export const getTypeColorClass = (type:string) => {
    const typeColors:any = {
      water: 'bg-water',
      grass: 'bg-grass',
      poison: 'bg-poison',
      fire: 'bg-fire',
      bug: 'bg-bug',
      flying: 'bg-flying',
      ground: 'bg-ground',
      steel: 'bg-steel',
      psychic: 'bg-psychic',
      ice: 'bg-ice',
      ghost: 'bg-ghost',
      normal: 'bg-normal',
      rock: 'bg-rock',
      electric: 'bg-electric',
      fighting: 'bg-fighting',
      fairy: 'bg-fairy',
      dark: 'bg-dark',
    };

    return typeColors[type] || 'bg-gray-200';
  };