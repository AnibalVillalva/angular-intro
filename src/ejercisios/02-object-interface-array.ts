let skill: string[] = ['Bash', 'Counter','Healing']

skill.push('Power')

interface Character {
    name: string;
    hp: number;
    skill: string[];
    city?: string;
}

const character: Character = {
    name: 'Strider',
    hp: 100,
    skill: ['Bash']
}
character.city = "Monaco";
console.table(character);