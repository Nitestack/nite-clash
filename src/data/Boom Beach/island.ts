import type Base from "@bb/Base";
import Defense from "@bb/Defense";
import Support from "@bb/Support";
import Economy from "@bb/Economy";
import GunboatAbility from "@bb/GunboatAbility";
import Hero from "@bb/Hero";
import HeroAbility from "@bb/HeroAbility";
import Mine from "@bb/Mine";
import Troop from "@bb/Troop";

//---------DEFENSE-----------\\
export const island: Base[] = [
  new Defense({
    name: "Sniper Tower",
    levels: [
      {
        price: [100],
        upgradeDuration: "3s",
        expPoints: 1,
      },
      {
        price: [200],
        upgradeDuration: "5m",
        expPoints: 2,
      },
      {
        price: [760],
        upgradeDuration: "20m",
        expPoints: 5,
      },
      {
        price: [2070],
        upgradeDuration: "1h",
        expPoints: 10,
      },
      {
        price: [4700],
        upgradeDuration: "1h 15m",
        expPoints: 11,
      },
      {
        price: [9300],
        upgradeDuration: "1h 45m",
        expPoints: 13,
      },
      {
        price: [12500, 2200],
        upgradeDuration: "2h 15m",
        expPoints: 15,
      },
      {
        price: [19100, 3800],
        upgradeDuration: "2h 30m",
        expPoints: 15,
      },
      {
        price: [32000, 7100],
        upgradeDuration: "3h 30m",
        expPoints: 18,
      },
      {
        price: [52000, 12300, 3300],
        upgradeDuration: "4h",
        expPoints: 20,
      },
      {
        price: [83000, 20800, 6700],
        upgradeDuration: "5h",
        expPoints: 24,
      },
      {
        price: [115000, 42000, 12000],
        upgradeDuration: "6h",
        expPoints: 26,
      },
      {
        price: [177000, 83000, 21800],
        upgradeDuration: "7h",
        expPoints: 28,
      },
      {
        price: [255000, 153000, 44000],
        upgradeDuration: "8h",
        expPoints: 31,
      },
      {
        price: [360000, 315000, 87000],
        upgradeDuration: "10h",
        expPoints: 40,
      },
      {
        price: [630000, 480000, 175000],
        upgradeDuration: "12h",
        expPoints: 46,
      },
      {
        price: [910000, 810000, 360000],
        upgradeDuration: "14h",
        expPoints: 52,
      },
      {
        price: [1320000, 1090000, 690000],
        upgradeDuration: "16h",
        expPoints: 57,
      },
      {
        price: [1650000, 1500000, 990000],
        upgradeDuration: "20h",
        expPoints: 61,
      },
      {
        price: [2100000, 2100000, 2090000],
        upgradeDuration: "1d",
        expPoints: 65,
      },
      {
        price: [2760000, 2530000, 2300000],
        upgradeDuration: "1d 2h",
        expPoints: 67,
      },
      {
        price: [3380000, 3100000, 2820000],
        upgradeDuration: "1d 4h",
        expPoints: 66,
      },
      {
        price: [4060000, 3720000, 3380000],
        upgradeDuration: "1d 6h",
        expPoints: 68,
      },
      {
        price: [4870000, 4460000, 4060000],
        upgradeDuration: "1d 8h",
        expPoints: 70,
      },
      {
        price: [5840000, 5360000, 4870000],
        upgradeDuration: "1d 10h",
        expPoints: 72,
      },
    ],
  }),
  new Defense({
    name: "Mortar",
    levels: [
      {
        price: [1180],
        upgradeDuration: "30m",
        expPoints: 7,
      },
      {
        price: [2360],
        upgradeDuration: "1h",
        expPoints: 10,
      },
      {
        price: [5900],
        upgradeDuration: "1h 45m",
        expPoints: 13,
      },
      {
        price: [11500],
        upgradeDuration: "2h 15m",
        expPoints: 15,
      },
      {
        price: [15000, 2730],
        upgradeDuration: "2h 45m",
        expPoints: 16,
      },
      {
        price: [23500, 4700],
        upgradeDuration: "3h 15m",
        expPoints: 18,
      },
      {
        price: [40000, 8700],
        upgradeDuration: "4h",
        expPoints: 20,
      },
      {
        price: [63000, 15000, 4000],
        upgradeDuration: "5h",
        expPoints: 24,
      },
      {
        price: [101000, 25200, 8200],
        upgradeDuration: "6h",
        expPoints: 26,
      },
      {
        price: [140000, 50000, 14600],
        upgradeDuration: "7h",
        expPoints: 28,
      },
      {
        price: [217000, 102000, 26700],
        upgradeDuration: "8h",
        expPoints: 31,
      },
      {
        price: [320000, 191000, 54000],
        upgradeDuration: "10h",
        expPoints: 37,
      },
      {
        price: [460000, 400000, 110000],
        upgradeDuration: "12h",
        expPoints: 44,
      },
      {
        price: [810000, 610000, 224000],
        upgradeDuration: "14h",
        expPoints: 53,
      },
      {
        price: [1180000, 1050000, 460000],
        upgradeDuration: "16h",
        expPoints: 62,
      },
      {
        price: [1720000, 1420000, 900000],
        upgradeDuration: "18h",
        expPoints: 64,
      },
      {
        price: [2170000, 1980000, 1300000],
        upgradeDuration: "20h",
        expPoints: 68,
      },
      {
        price: [2520000, 2450000, 1920000],
        upgradeDuration: "1d",
        expPoints: 71,
      },
      {
        price: [2880000, 2880000, 2870000],
        upgradeDuration: "1d 4h",
        expPoints: 77,
      },
      {
        price: [2960000, 2970000, 2950000],
        upgradeDuration: "1d 8h",
        expPoints: 77,
      },
      {
        price: [3420000, 3100000, 3070000],
        upgradeDuration: "1d 10h",
        expPoints: 79,
      },
      {
        price: [3750000, 3400000, 3360000],
        upgradeDuration: "1d 12h",
        expPoints: 82,
      },
      {
        price: [4130000, 3740000, 3700000],
        upgradeDuration: "1d 14h",
        expPoints: 83,
      },
      {
        price: [4330000, 3930000, 3890000],
        upgradeDuration: "1d 16h",
        expPoints: 85,
      },
      {
        price: [4760000, 4320000, 4270000],
        upgradeDuration: "1d 18h",
        expPoints: 87,
      },
      {
        price: [5000000, 4530000, 4480000],
        upgradeDuration: "1d 20h",
        expPoints: 89,
      },
      {
        price: [5500000, 4990000, 4930000],
        upgradeDuration: "1d 22h",
        expPoints: 91,
      },
    ],
  }),
  new Defense({
    name: "Machine Gun",
    levels: [
      {
        price: [3300],
        upgradeDuration: "1h",
        expPoints: 10,
      },
      {
        price: [4600],
        upgradeDuration: "1h 15m",
        expPoints: 11,
      },
      {
        price: [8800],
        upgradeDuration: "1h 45m",
        expPoints: 13,
      },
      {
        price: [10000],
        upgradeDuration: "2h",
        expPoints: 14,
      },
      {
        price: [13200, 2320],
        upgradeDuration: "2h 15m",
        expPoints: 15,
      },
      {
        price: [14900, 2610],
        upgradeDuration: "2h 30m",
        expPoints: 15,
      },
      {
        price: [22500, 4500],
        upgradeDuration: "3h",
        expPoints: 17,
      },
      {
        price: [38000, 8400],
        upgradeDuration: "4h",
        expPoints: 20,
      },
      {
        price: [60000, 14400, 3800],
        upgradeDuration: "5h",
        expPoints: 22,
      },
      {
        price: [97000, 24300, 7800],
        upgradeDuration: "6h",
        expPoints: 26,
      },
      {
        price: [134000, 49000, 14000],
        upgradeDuration: "7h",
        expPoints: 28,
      },
      {
        price: [205000, 96000, 25200],
        upgradeDuration: "8h",
        expPoints: 31,
      },
      {
        price: [295000, 177000, 50000],
        upgradeDuration: "10h",
        expPoints: 34,
      },
      {
        price: [420000, 360000, 100000],
        upgradeDuration: "12h",
        expPoints: 42,
      },
      {
        price: [730000, 550000, 201000],
        upgradeDuration: "14h",
        expPoints: 48,
      },
      {
        price: [1040000, 930000, 410000],
        upgradeDuration: "16h",
        expPoints: 59,
      },
      {
        price: [1510000, 1240000, 790000],
        upgradeDuration: "18h",
        expPoints: 62,
      },
      {
        price: [1880000, 1710000, 1120000],
        upgradeDuration: "20h",
        expPoints: 63,
      },
      {
        price: [2150000, 2090000, 1640000],
        upgradeDuration: "22h",
        expPoints: 67,
      },
      {
        price: [2430000, 2430000, 2420000],
        upgradeDuration: "1d",
        expPoints: 69,
      },
      {
        price: [2760000, 2540000, 2980000],
        upgradeDuration: "1d 2h",
        expPoints: 71,
      },
      {
        price: [3150000, 2900000, 3400000],
        upgradeDuration: "1d 4h",
        expPoints: 74,
      },
      {
        price: [3590000, 3310000, 3880000],
        upgradeDuration: "1d 6h",
        expPoints: 75,
      },
      {
        price: [4090000, 3770000, 4420000],
        upgradeDuration: "1d 8h",
        expPoints: 77,
      },
      {
        price: [4670000, 4300000, 5040000],
        upgradeDuration: "1d 10h",
        expPoints: 79,
      },
    ],
  }),
  new Defense({
    name: "Cannon",
    levels: [
      {
        price: [11600, 2030],
        upgradeDuration: "2h",
        expPoints: 14,
      },
      {
        price: [13200, 2320],
        upgradeDuration: "2h 15m",
        expPoints: 15,
      },
      {
        price: [19600, 3900],
        upgradeDuration: "2h 45m",
        expPoints: 16,
      },
      {
        price: [32000, 7100],
        upgradeDuration: "3h 30m",
        expPoints: 18,
      },
      {
        price: [50000, 12000, 3200],
        upgradeDuration: "4h",
        expPoints: 20,
      },
      {
        price: [79000, 19800, 6400],
        upgradeDuration: "5h",
        expPoints: 24,
      },
      {
        price: [107000, 39000, 11200],
        upgradeDuration: "6h",
        expPoints: 26,
      },
      {
        price: [161000, 76000, 19800],
        upgradeDuration: "7h",
        expPoints: 28,
      },
      {
        price: [227000, 136000, 39000],
        upgradeDuration: "8h",
        expPoints: 31,
      },
      {
        price: [314000, 274000, 76000],
        upgradeDuration: "9h",
        expPoints: 37,
      },
      {
        price: [540000, 410000, 149000],
        upgradeDuration: "10h",
        expPoints: 42,
      },
      {
        price: [610000, 460000, 168000],
        upgradeDuration: "12h",
        expPoints: 44,
      },
      {
        price: [850000, 760000, 330000],
        upgradeDuration: "14h",
        expPoints: 50,
      },
      {
        price: [950000, 850000, 370000],
        upgradeDuration: "16h",
        expPoints: 54,
      },
      {
        price: [1350000, 1110000, 700000],
        upgradeDuration: "18h",
        expPoints: 58,
      },
      {
        price: [1480000, 1220000, 770000],
        upgradeDuration: "20h",
        expPoints: 60,
      },
      {
        price: [1810000, 1650000, 1080000],
        upgradeDuration: "22h",
        expPoints: 62,
      },
      {
        price: [1970000, 1800000, 1180000],
        upgradeDuration: "1d",
        expPoints: 64,
      },
      {
        price: [2220000, 2160000, 1700000],
        upgradeDuration: "1d 4h",
        expPoints: 66,
      },
      {
        price: [2470000, 2470000, 2460000],
        upgradeDuration: "1d 8h",
        expPoints: 71,
      },
      {
        price: [2750000, 2990000, 3230000],
        upgradeDuration: "1d 10h",
        expPoints: 73,
      },
      {
        price: [3130000, 3400000, 3670000],
        upgradeDuration: "1d 12h",
        expPoints: 75,
      },
      {
        price: [3500000, 3800000, 4110000],
        upgradeDuration: "1d 14h",
        expPoints: 76,
      },
      {
        price: [3930000, 4260000, 4600000],
        upgradeDuration: "1d 16h",
        expPoints: 78,
      },
      {
        price: [4400000, 4780000, 5160000],
        upgradeDuration: "1d 18h",
        expPoints: 80,
      },
    ],
  }),
  new Defense({
    name: "Flamethrower",
    levels: [
      {
        price: [31500, 7500, 2000],
        upgradeDuration: "2h 45m",
        expPoints: 17,
      },
      {
        price: [44000, 10500, 2800],
        upgradeDuration: "3h 45m",
        expPoints: 20,
      },
      {
        price: [69000, 17300, 5600],
        upgradeDuration: "4h",
        expPoints: 22,
      },
      {
        price: [94000, 34000, 9800],
        upgradeDuration: "5h",
        expPoints: 24,
      },
      {
        price: [107000, 39000, 11200],
        upgradeDuration: "6h",
        expPoints: 26,
      },
      {
        price: [161000, 76000, 19800],
        upgradeDuration: "7h",
        expPoints: 28,
      },
      {
        price: [244000, 147000, 42000],
        upgradeDuration: "8h",
        expPoints: 31,
      },
      {
        price: [340000, 295000, 81000],
        upgradeDuration: "9h",
        expPoints: 37,
      },
      {
        price: [360000, 315000, 87000],
        upgradeDuration: "10h",
        expPoints: 40,
      },
      {
        price: [620000, 470000, 172000],
        upgradeDuration: "12h",
        expPoints: 46,
      },
      {
        price: [870000, 780000, 340000],
        upgradeDuration: "14h",
        expPoints: 52,
      },
      {
        price: [1320000, 1090000, 690000],
        upgradeDuration: "16h",
        expPoints: 56,
      },
      {
        price: [1400000, 1150000, 730000],
        upgradeDuration: "18h",
        expPoints: 57,
      },
      {
        price: [1710000, 1560000, 1020000],
        upgradeDuration: "20h",
        expPoints: 60,
      },
      {
        price: [1920000, 1870000, 1470000],
        upgradeDuration: "22h",
        expPoints: 61,
      },
      {
        price: [2140000, 2140000, 2130000],
        upgradeDuration: "1d",
        expPoints: 65,
      },
      {
        price: [2260000, 2270000, 2260000],
        upgradeDuration: "1d 4h",
        expPoints: 67,
      },
      {
        price: [2370000, 2790000, 2580000],
        upgradeDuration: "1d 6h",
        expPoints: 69,
      },
      {
        price: [2710000, 3190000, 2950000],
        upgradeDuration: "1d 8h",
        expPoints: 72,
      },
      {
        price: [3040000, 3570000, 3300000],
        upgradeDuration: "1d 10h",
        expPoints: 73,
      },
      {
        price: [3220000, 3790000, 3500000],
        upgradeDuration: "1d 12h",
        expPoints: 75,
      },
      {
        price: [3600000, 4240000, 3920000],
        upgradeDuration: "1d 14h",
        expPoints: 77,
      },
      {
        price: [4040000, 4750000, 4390000],
        upgradeDuration: "1d 16h",
        expPoints: 79,
      },
    ],
  }),
  new Defense({
    name: "Boom Cannon",
    levels: [
      {
        price: [121000, 57000, 14900],
        upgradeDuration: "5h",
        expPoints: 24,
      },
      {
        price: [141000, 66000, 17300],
        upgradeDuration: "6h",
        expPoints: 26,
      },
      {
        price: [198000, 119000, 34000],
        upgradeDuration: "7h",
        expPoints: 28,
      },
      {
        price: [255000, 153000, 44000],
        upgradeDuration: "8h",
        expPoints: 31,
      },
      {
        price: [350000, 308000, 85000],
        upgradeDuration: "10h",
        expPoints: 40,
      },
      {
        price: [610000, 460000, 168000],
        upgradeDuration: "12h",
        expPoints: 44,
      },
      {
        price: [850000, 760000, 330000],
        upgradeDuration: "14h",
        expPoints: 50,
      },
      {
        price: [950000, 850000, 370000],
        upgradeDuration: "16h",
        expPoints: 54,
      },
      {
        price: [1350000, 1110000, 700000],
        upgradeDuration: "18h",
        expPoints: 58,
      },
      {
        price: [1650000, 1500000, 990000],
        upgradeDuration: "20h",
        expPoints: 60,
      },
      {
        price: [1810000, 1650000, 1080000],
        upgradeDuration: "22h",
        expPoints: 61,
      },
      {
        price: [2040000, 1980000, 1560000],
        upgradeDuration: "1d",
        expPoints: 63,
      },
      {
        price: [2260000, 2270000, 2260000],
        upgradeDuration: "1d 6h",
        expPoints: 67,
      },
      {
        price: [2470000, 2470000, 2460000],
        upgradeDuration: "1d 12h",
        expPoints: 70,
      },
      {
        price: [3200000, 3460000, 2940000],
        upgradeDuration: "1d 14h",
        expPoints: 72,
      },
      {
        price: [3900000, 4210000, 3590000],
        upgradeDuration: "1d 16h",
        expPoints: 74,
      },
      {
        price: [4680000, 5050000, 4310000],
        upgradeDuration: "1d 18h",
        expPoints: 76,
      },
      {
        price: [5620000, 6060000, 5170000],
        upgradeDuration: "1d 20h",
        expPoints: 78,
      },
      {
        price: [6740000, 7270000, 6200000],
        upgradeDuration: "1d 22h",
        expPoints: 80,
      },
    ],
  }),
  new Defense({
    name: "Rocket Launcher",
    levels: [
      {
        price: [142000, 85000, 24300],
        upgradeDuration: "5h",
        expPoints: 24,
      },
      {
        price: [198000, 119000, 34000],
        upgradeDuration: "6h",
        expPoints: 28,
      },
      {
        price: [275000, 240000, 66000],
        upgradeDuration: "7h",
        expPoints: 34,
      },
      {
        price: [314000, 274000, 76000],
        upgradeDuration: "8h",
        expPoints: 34,
      },
      {
        price: [540000, 410000, 149000],
        upgradeDuration: "10h",
        expPoints: 42,
      },
      {
        price: [760000, 680000, 298000],
        upgradeDuration: "12h",
        expPoints: 48,
      },
      {
        price: [850000, 760000, 330000],
        upgradeDuration: "14h",
        expPoints: 50,
      },
      {
        price: [1210000, 1000000, 630000],
        upgradeDuration: "16h",
        expPoints: 54,
      },
      {
        price: [1480000, 1350000, 890000],
        upgradeDuration: "18h",
        expPoints: 56,
      },
      {
        price: [1850000, 1800000, 1420000],
        upgradeDuration: "20h",
        expPoints: 61,
      },
      {
        price: [1920000, 1870000, 1470000],
        upgradeDuration: "1d",
        expPoints: 62,
      },
      {
        price: [2060000, 2060000, 2050000],
        upgradeDuration: "1d 4h",
        expPoints: 64,
      },
      {
        price: [2470000, 2470000, 2460000],
        upgradeDuration: "1d 8h",
        expPoints: 70,
      },
      {
        price: [4210000, 3590000, 3900000],
        upgradeDuration: "1d 10h",
        expPoints: 72,
      },
      {
        price: [5050000, 4310000, 4680000],
        upgradeDuration: "1d 12h",
        expPoints: 74,
      },
      {
        price: [6060000, 5170000, 5620000],
        upgradeDuration: "1d 14h",
        expPoints: 76,
      },
      {
        price: [7270000, 6200000, 6000000],
        upgradeDuration: "1d 16h",
        expPoints: 78,
      },
    ],
  }),
  new Defense({
    name: "Shock Launcher",
    levels: [
      {
        price: [810000, 670000, 420000],
        upgradeDuration: "8h",
        expPoints: 18,
      },
      {
        price: [940000, 780000, 490000],
        upgradeDuration: "10h",
        expPoints: 20,
      },
      {
        price: [1150000, 1050000, 690000],
        upgradeDuration: "12h",
        expPoints: 22,
      },
      {
        price: [1480000, 1350000, 890000],
        upgradeDuration: "14h",
        expPoints: 24,
      },
      {
        price: [1670000, 1620000, 1270000],
        upgradeDuration: "18h",
        expPoints: 25,
      },
      {
        price: [2040000, 1980000, 1560000],
        upgradeDuration: "20h",
        expPoints: 28,
      },
      {
        price: [2470000, 2470000, 2460000],
        upgradeDuration: "1d",
        expPoints: 32,
      },
      {
        price: [2880000, 2880000, 2870000],
        upgradeDuration: "1d 6h",
        expPoints: 36,
      },
      {
        price: [3300000, 3300000, 3300000],
        upgradeDuration: "1d 12h",
        expPoints: 37,
      },
      {
        price: [4320000, 4700000, 5080000],
        upgradeDuration: "1d 14h",
        expPoints: 39,
      },
      {
        price: [5400000, 5870000, 6000000],
        upgradeDuration: "1d 16h",
        expPoints: 41,
      },
    ],
    //---------SUPPORT-----------\\
  }),
  new Support({
    name: "Gunboat",
    levels: [
      {
        price: [0],
        upgradeDuration: "0s",
        expPoints: 0,
      },
      {
        price: [180],
        upgradeDuration: "2m",
        expPoints: 1,
      },
      {
        price: [1240],
        upgradeDuration: "30m",
        expPoints: 7,
      },
      {
        price: [4500],
        upgradeDuration: "1h 45m",
        expPoints: 13,
      },
      {
        price: [10000],
        upgradeDuration: "3h",
        expPoints: 17,
      },
      {
        price: [19800],
        upgradeDuration: "3h 45m",
        expPoints: 19,
      },
      {
        price: [26400, 4600],
        upgradeDuration: "4h",
        expPoints: 20,
      },
      {
        price: [40000, 7900],
        upgradeDuration: "5h",
        expPoints: 22,
      },
      {
        price: [66000, 14600],
        upgradeDuration: "6h",
        expPoints: 26,
      },
      {
        price: [105000, 24900, 6600],
        upgradeDuration: "8h",
        expPoints: 28,
      },
      {
        price: [166000, 42000, 13400],
        upgradeDuration: "10h",
        expPoints: 34,
      },
      {
        price: [228000, 82000, 23800],
        upgradeDuration: "12h",
        expPoints: 37,
      },
      {
        price: [350000, 163000, 43000],
        upgradeDuration: "14h",
        expPoints: 40,
      },
      {
        price: [490000, 297000, 84000],
        upgradeDuration: "18h",
        expPoints: 46,
      },
      {
        price: [690000, 600000, 166000],
        upgradeDuration: "20h",
        expPoints: 54,
      },
      {
        price: [1200000, 910000, 330000],
        upgradeDuration: "1d",
        expPoints: 64,
      },
      {
        price: [1710000, 1530000, 670000],
        upgradeDuration: "1d 4h",
        expPoints: 73,
      },
      {
        price: [2450000, 2020000, 1280000],
        upgradeDuration: "1d 8h",
        expPoints: 77,
      },
      {
        price: [3030000, 2760000, 1810000],
        upgradeDuration: "1d 12h",
        expPoints: 81,
      },
      {
        price: [3400000, 3300000, 2630000],
        upgradeDuration: "1d 20h",
        expPoints: 83,
      },
      {
        price: [4470000, 4300000, 4130000],
        upgradeDuration: "1d 22h",
        expPoints: 85,
      },
      {
        price: [5100000, 4900000, 4700000],
        upgradeDuration: "2d",
        expPoints: 87,
      },
      {
        price: [5810000, 5590000, 5360000],
        upgradeDuration: "2d 2h",
        expPoints: 89,
      },
      {
        price: [6630000, 6370000, 6110000],
        upgradeDuration: "2d 4h",
        expPoints: 91,
      },
    ],
  }),
  new Support({
    name: "Radar",
    levels: [
      {
        price: [150],
        upgradeDuration: "2m",
        expPoints: 1,
      },
      {
        price: [400],
        upgradeDuration: "15m",
        expPoints: 5,
      },
      {
        price: [2360],
        upgradeDuration: "1h",
        expPoints: 10,
      },
      {
        price: [5900],
        upgradeDuration: "1h 45m",
        expPoints: 13,
      },
      {
        price: [11300],
        upgradeDuration: "2h 15m",
        expPoints: 15,
      },
      {
        price: [16500, 2900],
        upgradeDuration: "3h",
        expPoints: 17,
      },
      {
        price: [25500, 5100],
        upgradeDuration: "3h 30m",
        expPoints: 18,
      },
      {
        price: [44000, 9600],
        upgradeDuration: "4h",
        expPoints: 20,
      },
      {
        price: [71000, 16800, 4500],
        upgradeDuration: "6h",
        expPoints: 24,
      },
      {
        price: [114000, 28700, 9300],
        upgradeDuration: "7h",
        expPoints: 28,
      },
      {
        price: [161000, 58000, 16800],
        upgradeDuration: "8h",
        expPoints: 31,
      },
      {
        price: [249000, 117000, 30700],
        upgradeDuration: "10h",
        expPoints: 34,
      },
      {
        price: [360000, 218000, 62000],
        upgradeDuration: "12h",
        expPoints: 40,
      },
      {
        price: [520000, 450000, 125000],
        upgradeDuration: "14h",
        expPoints: 46,
      },
      {
        price: [910000, 700000, 254000],
        upgradeDuration: "16h",
        expPoints: 56,
      },
      {
        price: [1330000, 1190000, 520000],
        upgradeDuration: "18h",
        expPoints: 64,
      },
      {
        price: [1940000, 1600000, 1010000],
        upgradeDuration: "20h",
        expPoints: 69,
      },
      {
        price: [2430000, 2220000, 1460000],
        upgradeDuration: "1d",
        expPoints: 72,
      },
      {
        price: [2810000, 2740000, 2150000],
        upgradeDuration: "1d 6h",
        expPoints: 74,
      },
      {
        price: [3200000, 3200000, 3200000],
        upgradeDuration: "1d 12h",
        expPoints: 80,
      },
    ],
  }),
  new Support({
    name: "Landing Craft",
    levels: [
      {
        price: [150],
        upgradeDuration: "3s",
        expPoints: 1,
      },
      {
        price: [250],
        upgradeDuration: "2m",
        expPoints: 1,
      },
      {
        price: [3200],
        upgradeDuration: "45m",
        expPoints: 8,
      },
      {
        price: [9400],
        upgradeDuration: "1h 30m",
        expPoints: 12,
      },
      {
        price: [18300],
        upgradeDuration: "2h",
        expPoints: 14,
      },
      {
        price: [24400, 4300],
        upgradeDuration: "2h 30m",
        expPoints: 15,
      },
      {
        price: [37000, 7400],
        upgradeDuration: "3h",
        expPoints: 17,
      },
      {
        price: [62000, 13500],
        upgradeDuration: "4h",
        expPoints: 21,
      },
      {
        price: [97000, 23100, 6200],
        upgradeDuration: "5h",
        expPoints: 22,
      },
      {
        price: [154000, 39000, 12500],
        upgradeDuration: "6h",
        expPoints: 26,
      },
      {
        price: [212000, 77000, 22100],
        upgradeDuration: "7h",
        expPoints: 28,
      },
      {
        price: [320000, 151000, 40000],
        upgradeDuration: "8h",
        expPoints: 28,
      },
      {
        price: [460000, 276000, 79000],
        upgradeDuration: "10h",
        expPoints: 34,
      },
      {
        price: [660000, 510000, 155000],
        upgradeDuration: "12h",
        expPoints: 40,
      },
      {
        price: [1080000, 840000, 310000],
        upgradeDuration: "14h",
        expPoints: 46,
      },
      {
        price: [1590000, 1430000, 620000],
        upgradeDuration: "16h",
        expPoints: 54,
      },
      {
        price: [2020000, 1890000, 1200000],
        upgradeDuration: "18h",
        expPoints: 58,
      },
      {
        price: [2830000, 2580000, 1690000],
        upgradeDuration: "20h",
        expPoints: 60,
      },
      {
        price: [3200000, 3130000, 2460000],
        upgradeDuration: "1d",
        expPoints: 61,
      },
      {
        price: [3400000, 3600000, 3350000],
        upgradeDuration: "1d 4h",
        expPoints: 66,
      },
      {
        price: [3700000, 4430000, 4100000],
        upgradeDuration: "1d 6h",
        expPoints: 68,
      },
      {
        price: [4320000, 5080000, 4700000],
        upgradeDuration: "1d 8h",
        expPoints: 70,
      },
      {
        price: [4970000, 5840000, 5410000],
        upgradeDuration: "1d 10h",
        expPoints: 72,
      },
      {
        price: [5710000, 6720000, 6220000],
        upgradeDuration: "1d 12h",
        expPoints: 74,
      },
      {
        price: [6570000, 7730000, 7150000],
        upgradeDuration: "1d 14h",
        expPoints: 76,
      },
    ],
  }),
  new Support({
    name: "Armory",
    levels: [
      {
        price: [2600],
        upgradeDuration: "45m",
        expPoints: 8,
      },
      {
        price: [10000],
        upgradeDuration: "2h",
        expPoints: 14,
      },
      {
        price: [19800, 3500],
        upgradeDuration: "3h 30m",
        expPoints: 18,
      },
      {
        price: [29400, 5900],
        upgradeDuration: "4h",
        expPoints: 20,
      },
      {
        price: [49000, 10700],
        upgradeDuration: "5h",
        expPoints: 22,
      },
      {
        price: [76000, 18000, 4800],
        upgradeDuration: "6h",
        expPoints: 26,
      },
      {
        price: [118000, 29700, 9600],
        upgradeDuration: "7h",
        expPoints: 28,
      },
      {
        price: [161000, 58000, 16800],
        upgradeDuration: "8h",
        expPoints: 31,
      },
      {
        price: [174000, 63000, 18200],
        upgradeDuration: "9h",
        expPoints: 31,
      },
      {
        price: [261000, 123000, 32000],
        upgradeDuration: "10h",
        expPoints: 34,
      },
      {
        price: [370000, 222000, 63000],
        upgradeDuration: "12h",
        expPoints: 40,
      },
      {
        price: [550000, 480000, 132000],
        upgradeDuration: "14h",
        expPoints: 48,
      },
      {
        price: [590000, 510000, 142000],
        upgradeDuration: "16h",
        expPoints: 50,
      },
      {
        price: [1010000, 770000, 280000],
        upgradeDuration: "18h",
        expPoints: 60,
      },
      {
        price: [1420000, 1270000, 560000],
        upgradeDuration: "20h",
        expPoints: 67,
      },
      {
        price: [1520000, 1360000, 600000],
        upgradeDuration: "1d",
        expPoints: 69,
      },
      {
        price: [2150000, 1780000, 1130000],
        upgradeDuration: "1d 4h",
        expPoints: 73,
      },
      {
        price: [2630000, 2400000, 1580000],
        upgradeDuration: "1d 8h",
        expPoints: 74,
      },
      {
        price: [2960000, 2880000, 2260000],
        upgradeDuration: "1d 12h",
        expPoints: 77,
      },
      {
        price: [3300000, 3300000, 3300000],
        upgradeDuration: "2d",
        expPoints: 81,
      },
      {
        price: [4060000, 3900000, 3740000],
        upgradeDuration: "2d 2h",
        expPoints: 83,
      },
      {
        price: [4580000, 4400000, 4220000],
        upgradeDuration: "2d 4h",
        expPoints: 85,
      },
      {
        price: [5170000, 4970000, 4770000],
        upgradeDuration: "2d 6h",
        expPoints: 87,
      },
      {
        price: [5850000, 5620000, 5390000],
        upgradeDuration: "2d 8h",
        expPoints: 89,
      },
      {
        price: [6610000, 6350000, 6100000],
        upgradeDuration: "2d 10h",
        expPoints: 91,
      },
    ],
  }),
  new Support({
    name: "Sculptor",
    levels: [
      {
        price: [3000],
        upgradeDuration: "30m",
        expPoints: 7,
      },
      {
        price: [29400, 5900],
        upgradeDuration: "4h",
        expPoints: 20,
      },
      {
        price: [88000, 21000, 5600],
        upgradeDuration: "7h",
        expPoints: 28,
      },
      {
        price: [320000, 151000, 40000],
        upgradeDuration: "12h",
        expPoints: 40,
      },
      {
        price: [670000, 580000, 161000],
        upgradeDuration: "18h",
        expPoints: 54,
      },
      {
        price: [1710000, 1530000, 670000],
        upgradeDuration: "1d",
        expPoints: 73,
      },
      {
        price: [3060000, 2790000, 1830000],
        upgradeDuration: "1d 12h",
        expPoints: 81,
      },
      {
        price: [3900000, 3900000, 3900000],
        upgradeDuration: "2d",
        expPoints: 88,
      },
      {
        price: [4820000, 4820000, 4820000],
        upgradeDuration: "2d 12h",
        expPoints: 95,
      },
      {
        price: [5760000, 5760000, 5760000],
        upgradeDuration: "3d",
        expPoints: 102,
      },
    ],
  }),
  new Support({
    name: "Submarine",
    levels: [
      {
        price: [50000, 12000, 3200],
        upgradeDuration: "2h",
        expPoints: 1,
      },
      {
        price: [57000, 13500, 3600],
        upgradeDuration: "3h 15m",
        expPoints: 1,
      },
      {
        price: [99000, 24800, 8000],
        upgradeDuration: "5h",
        expPoints: 8,
      },
      {
        price: [134000, 49000, 14000],
        upgradeDuration: "6h",
        expPoints: 12,
      },
      {
        price: [201000, 95000, 24800],
        upgradeDuration: "7h",
        expPoints: 14,
      },
      {
        price: [284000, 171000, 49000],
        upgradeDuration: "8h",
        expPoints: 15,
      },
      {
        price: [390000, 340000, 95000],
        upgradeDuration: "10h",
        expPoints: 17,
      },
      {
        price: [670000, 510000, 187000],
        upgradeDuration: "12h",
        expPoints: 20,
      },
      {
        price: [950000, 850000, 370000],
        upgradeDuration: "13h",
        expPoints: 23,
      },
      {
        price: [1350000, 1110000, 700000],
        upgradeDuration: "14h",
        expPoints: 26,
      },
    ],
  }),
  new Support({
    name: "Statue Storage",
    levels: [
      {
        price: [510000, 310000, 90000],
        upgradeDuration: "16h",
        expPoints: 3,
      },
      {
        price: [1210000, 920000, 340000],
        upgradeDuration: "22h",
        expPoints: 5,
      },
      {
        price: [2420000, 2000000, 1270000],
        upgradeDuration: "1d 4h",
        expPoints: 7,
      },
      {
        price: [3300000, 3200000, 2550000],
        upgradeDuration: "1d 10h",
        expPoints: 9,
      },
      {
        price: [4100000, 4100000, 4100000],
        upgradeDuration: "1d 16h",
        expPoints: 11,
      },
      {
        price: [4900000, 4900000, 4900000],
        upgradeDuration: "1d 22h",
        expPoints: 13,
      },
    ],
  }),
  new Support({
    name: "Weapon Lab",
    levels: [
      {
        price: [1047000, 800000, 293000],
        upgradeDuration: "1d 6h",
        expPoints: 54,
      },
      {
        price: [1482000, 1326000, 528000],
        upgradeDuration: "1d 10h",
        expPoints: 58,
      },
      {
        price: [2400000, 1995000, 1268000],
        upgradeDuration: "1d 14h",
        expPoints: 61,
      },
      {
        price: [3315000, 3060000, 2006000],
        upgradeDuration: "1d 18h",
        expPoints: 64,
      },
      {
        price: [4655000, 4655000, 4655000],
        upgradeDuration: "2d 12h",
        expPoints: 77,
      },
      {
        price: [5850000, 5850000, 5850000],
        upgradeDuration: "3d 6h",
        expPoints: 82,
      },
      {
        price: [6100000, 6100000, 6100000],
        upgradeDuration: "4d",
        expPoints: 88,
      },
    ],
    //---------ECONOMY-----------\\
  }),
  new Economy({
    name: "Residence",
    levels: [],
  }),
  new Economy({
    name: "Gold Storage",
    levels: [],
  }),
  new Economy({
    name: "Sawmill",
    levels: [],
  }),
  new Economy({
    name: "Wood Storage",
    levels: [],
  }),
  new Economy({
    name: "Vault",
    levels: [],
  }),
  new Economy({
    name: "Stone Storage",
    levels: [],
  }),
  new Economy({
    name: "Quarry",
    levels: [],
  }),
  new Economy({
    name: "Iron Storage",
    levels: [],
  }),
  new Economy({
    name: "Iron Mine",
    levels: [],
  }),
];
