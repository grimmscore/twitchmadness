function wrestlerData (wrestler_brand, wrestler_name, wrestler_team, wrestler_singlesWins, wrestler_singlesLoss, wrestler_teamWins, wrestler_teamLoss, wrestler_randWins, wrestler_randLoss, wrestler_multiWins, wrestler_multiLoss,wrestler_multiPinned,
wrestler_totalMatches, wrestler_teamWinrate) {
this.brand = wrestler_brand
this.name = wrestler_name
this.team = wrestler_team
this.singlesWins = wrestler_singlesWins
this.singlesLoss = wrestler_singlesLoss
this.teamWins = wrestler_teamWins
this.teamLoss = wrestler_teamLoss
this.randWins = wrestler_randWins
this.randLoss = wrestler_randLoss
this.multiWins = wrestler_multiWins
this.multiLoss = wrestler_multiLoss
this.multiPinned = wrestler_multiPinned
this.totalMatches = this.singlesWins + this.singlesLoss + this.randWins + this.randLoss + this.multiWins + this.multiLoss + this.teamWins + this.teamLoss
this.totalWins = this.singlesWins + this.teamWins + this.randWins + this.multiWins
this.overallWinrate = 0; if (this.totalMatches === 0){this.overallWinrate = 0 + '%'} else  {this.overallWinrate = Math.ceil(this.totalWins / this.totalMatches * 100) + '%' }
this.teamWinrate = wrestler_teamWinrate
this.teamTotalMatches = this.teamWins + this.teamLoss
if (this.teamWins === 0) {this.teamWinrate = 0 + '%'} else  {this.teamWinrate = Math.ceil(this.teamWins / this.teamTotalMatches * 100) + '%' }
};

// const Name - Show, Name, Team, Singles Wins, Singles Lost, Team Wins, Team Loss, 2,3,4man Tag Wins, 2,3,4man Tag Losses, times pinned
// Multiman Wins, Multiman Losses, Total Matches

//Twitch Madness
const alexWhiteRa = new wrestlerData('Twitch Madness', 'Alex WhiteRa', '-', 9, 4, 0, 0, 0, 0, 2, 2, 2);
const amouranth = new wrestlerData('Twitch Madness', 'Amouranth', '-', 3, 1, 0, 0, 1, 0, 2, 4, 3);
const arina_gp = new wrestlerData('Twitch Madness', 'arina_gp', '-', 0,3,0,0,1,0,2,2,1);
const balabama = new wrestlerData('Twitch Madness', 'Balabama', 'WhoPG', 2,3,0,0,0,0,1,1,1);
const bigF = new wrestlerData('Twitch Madness', 'Big F', '-', 5,1,0,0,0,1,0,7,4);
const boogeyman = new wrestlerData('Twitch Madness', 'Boogeyman', '-', 0,2,0,0,3,3,0,1,0);
const bratishkin = new wrestlerData('Twitch Madness', 'Bratishkin', '89 Freaks', 3,4,2,4,1,0,0,1,0);
const brotherKostya = new wrestlerData('Twitch Madness', 'Brother Kostya', 'Bratiki94', 0,0,1,3,0,0,0,0,0);
const brotherOleg = new wrestlerData('Twitch Madness', 'Brother Oleg', 'Bratiki94', 0,0,1,3,0,0,0,0,0);
const browjey = new wrestlerData('Twitch Madness', 'Browjey', '-', 3,3,0,0,0,0,1,7,5);
const buster = new wrestlerData('Twitch Madness', 'Buster', '89 Freaks', 1,0,2,4,1,0,0,1,0);
const cake = new wrestlerData('Twitch Madness', 'Cake', 'ARMA', 1,3,0,2,0,0,0,5,1);
const wlg = new wrestlerData('Twitch Madness', 'Denis WELOVEGAMES', 'Success', 2,1,3,1,0,0,5,5,1);
const dread = new wrestlerData('Twitch Madness', 'Dread', 'Танкисты', 1,0,7,1,0,1,1,1,0);
const faridysha = new wrestlerData('Twitch Madness', 'Faridysha', '-', 3,0,0,0,0,1,1,3,2);
const flashko = new wrestlerData('Twitch Madness', 'F1ashko', 'Uzyashko', 1,0,6,3,0 ,0,0,1,1);
const forsen = new wrestlerData('Twitch Madness', 'Forsen', '-', 2,3,0,0,1,2,0,3,1);
const golovach = new wrestlerData('Twitch Madness', 'Golovach', 'Cardmen', 0,1,0,1,0,0,0,0,0);
const guitman = new wrestlerData('Twitch Madness', 'Guit88man', 'Танкисты', 2,0,7,1,0,3,0,2,1);
const krabick = new wrestlerData('Twitch Madness', 'Krabick', '-', 4,0,0,0,4,3,1,1,0);
const lasqa = new wrestlerData('Twitch Madness', 'Lasqa', 'Pomoiniki', 5,4,1,2,0,1,1,3,1);
const romanovalera = new wrestlerData('Twitch Madness', 'Lera Romanova', '-', 1,0,0,0,0,0,0,4,2);
const lizon = new wrestlerData('Twitch Madness', 'Liz0n', '-', 2,4,0,0,1,0,2,1,0);
const maxgoodoq = new wrestlerData('Twitch Madness', 'Max Goodoq', 'ARMA', 4,3,0,2,0,0,0,1,0);
const melharucos = new wrestlerData('Twitch Madness', 'Melharucos', '-', 2,3,0,0,1,1,1,3,2);
const ilame = new wrestlerData('Twitch Madness', 'Mister iLame', 'Танкисты', 4,1,0,0,0,1,1,4,2);
const nuke = new wrestlerData('Twitch Madness', 'Nuke', '-', 0,4,0,0,0,2,0,2,0);
const ramona = new wrestlerData('Twitch Madness', 'Ramona', '-', 1,2,0,0,1,0,1,4,3);
const roadhouse = new wrestlerData('Twitch Madness', 'Roadhouse', 'WhoPG', 3,7,0,0,1,0,0,3,2);
const segall = new wrestlerData('Twitch Madness', 'Segall', 'Помойники', 2,5,1,2,0,1,0,4,3);
const silvername = new wrestlerData('Twitch Madness', 'Silvername', 'Cardmen', 1,1,0,1,0,0,0,1,0);
const sodapoppin = new wrestlerData('Twitch Madness', 'Sodapoppin', '-', 1,0,0,0,0,1,0,0,0);
const speedyKarmik = new wrestlerData('Twitch Madness', 'Speedy Karmik', '-', 5,3,0,1,0,0,1,4,2);
const uncleBjorn = new wrestlerData('Twitch Madness', 'Uncle Bjorn', '-', 1,6,0,0,0,0,2,4,1);
const usachman = new wrestlerData('Twitch Madness', 'Usachman', 'WhoPG', 1,1,3,4,1,0,0,0,0);
const uselessmouth = new wrestlerData('Twitch Madness', 'Uselessmouth', 'Uzyashko', 2,2,6,2,0,1,0,1,0);
const vanDarkholme = new wrestlerData('Twitch Madness', 'Van Darkholme', '-', 2,2,0,0,1,1,3,1,1);
const voodoosh = new wrestlerData('Twitch Madness', 'Voodoosh', '-', 3,4,0,0,0,0,1,3,2);
const xqc = new wrestlerData('Twitch Madness', 'XQC', '-', 0,1,0,0,0,1,0,0,0);
const nvy = new wrestlerData('Twitch Madness', 'NAMVSEYASNO', 'WhoPG', 0,2,3,4,1,0,0,0,0);

// Vision
const alexanderNevsky = new wrestlerData('Vision', 'Alexander Nevsky', '-', 7, 3, 0, 0, 0, 0, 0, 2, 2);
const pistoletov = new wrestlerData('Vision', 'Alexander Pistoletov', 'Перцы в Берцах', 0,3,2,2,0,0,0,1,0);
const alinarin = new wrestlerData('Vision', 'AlinaRin', '-', 4,0,0,0,0,1,0,4,2);
const logvinov = new wrestlerData('Vision', 'Anton Logvinov', 'Gamer Industry', 4,2,2,3,0,0,0,1,1);
const arrowwoods = new wrestlerData('Vision', 'Arrowwoods', '-', 6,3,0,0,1,0,1,4,3);
const drDisrespect = new wrestlerData('Vision', 'Dr. Disrespect', '-', 4,4,0,0,0,1,1,3,3);
const papich = new wrestlerData('Vision', 'Papich', '-', 5,3,0,0,2,0,1,7,6);
const valakas = new wrestlerData('Vision', 'Glad Valakas', '-', 1,2,0,0,1,1,0,2,2);
const hovansky = new wrestlerData('Vision', 'Hovansky', 'Bosco Brothers', 1,1,1,0,0,0,0,0,0);
const karina = new wrestlerData('Vision', 'Karina', '-', 0,2,0,0,0,0,1,5,4);
const kuzma = new wrestlerData('Vision', 'Kuzma', 'Hangover', 0,0,3,0,0,0,0,0,0);
const mira = new wrestlerData('Vision', 'Mira', '-', 0,1,0,0,0,0,0,1,0);
const mobster = new wrestlerData('Vision', 'Mob5ter', '-', 2,2,0,0,0,2,0,0,0);
const nastjaDD = new wrestlerData('Vision', 'Nastjadd', '-', 0,2,0,0,0,0,1,2,0);
const ozon = new wrestlerData('Vision', 'Ozon', '-', 5,4,0,0,0,1,1,2,2);
const pahom = new wrestlerData('Vision', 'Pahom', '-', 1,0,0,0,0,0,0,1,1);
const pierreDunn = new wrestlerData('Vision', 'Pierre Dunn', 'Bosco Brothers', 4,3,1,0,0,2,0,2,1);
const pokimane = new wrestlerData('Vision', 'Pokimane', '-', 1,0,0,0,0,0,0,0,0);
const gosling = new wrestlerData('Vision', 'Ryan Gosling', '-', 2,5,0,0,0,0,2,0,0);
const grafoyni = new wrestlerData('Vision', 'Sgt. Grafoyni', 'Wycc Band', 0,0,0,2,0,0,0,0,0);
const snailkick = new wrestlerData('Vision', 'Snailkick', 'Success', 0,2,3,1,0,0,0,0,0);
const sunboy = new wrestlerData('Vision', 'Sunboy', '-', 0,5,0,0,0,0,0,1,1);
const toddHoward = new wrestlerData('Vision', 'Todd Howard', '-', 1,0,0,0,0,0,0,1,1);
const julik = new wrestlerData('Vision', 'Julik', 'Hangover', 0,0,3,0,0,0,0,0,0);
const vanomas = new wrestlerData('Vision', 'Vanomas', 'Перцы в Берцах', 0,0,2,2,0,0,0,0,0);
const zuev = new wrestlerData('Vision', 'Viktor Zuev', 'Gamer Industry', 1,1,2,3,0,0,0,0,0);
const vjlink = new wrestlerData('Vision', 'VJLink', '-', 1,2,0,0,0,0,0,1,1);
const wycc = new wrestlerData('Vision', 'Wycc', 'Wycc Band', 0,0,0,2,0,0,0,0,0);
const zanuda = new wrestlerData('Vision', 'Zanuda', '-', 0,0,0,0,0,0,0,5,2);