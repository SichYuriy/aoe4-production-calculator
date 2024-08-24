import {useState} from "react";
import {Modal} from "react-bootstrap";
import s from './updates-modal-link.module.css'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type UpdateItem = {
    id: string;
    date: Date;
    patch: string;
    description: string;
}

const updates: UpdateItem[] = [
    {
        id: '123',
        date: new Date(2024, 7, 24),
        patch: '11.1.1201',
        description: "Camel Rider Cost adjusted from 160f/30w/30g to 130f/45w/45g"
    },
    {
        id: '122',
        date: new Date(2024, 7, 1),
        patch: '11.0.782',
        description: "White Tower production speed reduced from 100% to 75%"
    },
    {
        id: '121',
        date: new Date(2024, 7, 1),
        patch: '11.0.782',
        description: "Fix production speed bonus stacking. Make production speed bonus multiplicative instead off additive"
    },
    {
        id: '120',
        date: new Date(2024, 6, 18),
        patch: '11.0.782',
        description: "Lodya fishing boat train time increased to 46 seconds"
    },
    {
        id: '119',
        date: new Date(2024, 6, 18),
        patch: '11.0.782',
        description: "Mangudai train time improved from 30 seconds to 28 seconds"
    },
    {
        id: '118',
        date: new Date(2024, 6, 18),
        patch: '11.0.782',
        description: "Mangudai cost reduced from 120 Food 40 Gold to 90 Food 60 Gold"
    },
    {
        id: '117',
        date: new Date(2024, 6, 18),
        patch: '11.0.782',
        description: "Atakebune cost reduced from 170 Food 220 Wood 220 Gold to 100 Food 220 Wood 220 Gold"
    },
    {
        id: '116',
        date: new Date(2024, 6, 18),
        patch: '11.0.782',
        description: "French Town Centers work 10/15/20/25% faster per Age changed to 15/15/20/25%"
    },
    {
        id: '115',
        date: new Date(2024, 6, 18),
        patch: '11.0.782',
        description: "Fishing boat train time increased from 25 to 30 seconds"
    },
    {
        id: '114',
        date: new Date(2024, 3, 18),
        patch: '10.1.48',
        description: "Grand Galley Food cost reduced from 150 to 135"
    },
    {
        id: '113',
        date: new Date(2024, 3, 18),
        patch: '10.1.48',
        description: "War Cog Food cost reduced from 85 to 75"
    },
    {
        id: '112',
        date: new Date(2024, 3, 18),
        patch: '10.1.48',
        description: "Ranger and Footman train time reduced from 50 to 45 seconds"
    },
    {
        id: '111',
        date: new Date(2024, 3, 18),
        patch: '10.1.48',
        description: "Wynguard Footman cost changed from 200 Food, 500 Gold to 300 Food, 400 Gold"
    },
    {
        id: '110',
        date: new Date(2024, 3, 18),
        patch: '10.1.48',
        description: "Dromon Food cost reduced from 110 to 100"
    },
    {
        id: '109',
        date: new Date(2024, 3, 18),
        patch: '10.1.48',
        description: "Springald ship Food cost reduced from 120 to 110"
    },
    {
        id: '108',
        date: new Date(2024, 3, 18),
        patch: '10.1.48',
        description: "Arrow ships Food cost reduced from 90 to 80"
    },
    {
        id: '107',
        date: new Date(2024, 2, 19),
        patch: '10.0.576',
        description: "Chierosiphon cost reduced from 200 Wood 100 Gold to 200 Wood 60 Gold"
    },
    {
        id: '106',
        date: new Date(2024, 2, 19),
        patch: '10.0.576',
        description: "Tower of the Sultan build time reduced from 200 to 140 seconds"
    },
    {
        id: '105',
        date: new Date(2024, 2, 19),
        patch: '10.0.576',
        description: "Camel Archer cost reduced from 180 Food to 170 Food"
    },
    {
        id: '104',
        date: new Date(2024, 2, 19),
        patch: '10.0.576',
        description: "Pagoda now generates 100 Gold, 62 Food, 62 Wood, 25 Stone"
    },
    {
        id: '103',
        date: new Date(2024, 2, 19),
        patch: '10.0.576',
        description: "Workshop Ram train time reduced from 40 to 35 seconds"
    },
    {
        id: '102',
        date: new Date(2024, 0, 30),
        patch: '9.2.628',
        description: "Meditation Gardens: Berry food per minute reduced from 8 to 6. Stone mine resources per" +
            " minute reduced from 30 to 25. Gold mine resources per minute reduced from 30 to 25."
    },
    {
        id: '101',
        date: new Date(2024, 0, 30),
        patch: '9.2.628',
        description: "Sultanhani Trade Network: Reduced income of each Trader from 28 to 24 Gold per minute"
    },
    {
        id: '100',
        date: new Date(2024, 0, 30),
        patch: '9.2.628',
        description: "Dragon Villager gather rate bonus increased from +25% to +28%"
    },
    {
        id: '99',
        date: new Date(2024, 0, 30),
        patch: '9.2.628',
        description: "Chinese Dock: Decreased work rate bonus from 20% to 10%"
    },
    {
        id: '98',
        date: new Date(2024, 0, 30),
        patch: '9.2.628',
        description: "Cisterns gather bonus increased from 5/10/15/20/25% to 10/14/18/22/26% based"
    },
    {
        id: '97',
        date: new Date(2024, 0, 30),
        patch: '9.2.628',
        description: "Tithe Barns income reduced from 30 Food, 30 Wood, 30 Stone to 40 Food, 40 Wood, 10 Stone"
    },
    {
        id: '96',
        date: new Date(2023, 11, 17),
        patch: '9.1.370',
        description: "[fix] Fixed production speed modifiers accumulation"
    },
    {
        id: '95',
        date: new Date(2023, 11, 17),
        patch: '9.1.370',
        description: "Add Byzantines features: cisterns gathering rate, cisterns production speed"
    },
    {
        id: '94',
        date: new Date(2023, 11, 17),
        patch: '9.1.370',
        description: "Add Japanese features: fishing boats, town centers, Floating Gate"
    },
    {
        id: '93',
        date: new Date(2023, 11, 17),
        patch: '9.1.370',
        description: "Add Meditation Gardens"
    },
    {
        id: '92',
        date: new Date(2023, 11, 6),
        patch: '9.1.370',
        description: "Tower of the Sultan build time reduced from 240 seconds to 200 seconds"
    },
    {
        id: '91',
        date: new Date(2023, 11, 6),
        patch: '9.1.370',
        description: "Gold cost of each trade increased. Feudal: from 125 to 150. Castle: from 325 to 350. Imperial: from 400 to 425."
    },
    {
        id: '90',
        date: new Date(2023, 11, 6),
        patch: '9.1.370',
        description: "Malian Cattle food per minute generation in Ranches reduced from 28 to 25"
    },
    {
        id: '89',
        date: new Date(2023, 11, 6),
        patch: '9.1.370',
        description: "Trader production time increased from 25 seconds to 30 seconds"
    },
    {
        id: '88',
        date: new Date(2023, 10, 25),
        patch: '9.1.109',
        description: "Add Ayyubids features: golden age, bazaar"
    },
    {
        id: '87',
        date: new Date(2023, 10, 24),
        patch: '9.1.109',
        description: "Add Ayyubids few features: berries gathering rate, traders discount"
    },
    {
        id: '86',
        date: new Date(2023, 10, 22),
        patch: '9.1.109',
        description: "Add Zhu Xi's Legacy features: Chinese docks, imperial official on resources, granary, Yuan Dynasty, Pagoda"
    },
    {
        id: '85',
        date: new Date(2023, 10, 18),
        patch: '9.1.109',
        description: "Add Order of the Dragon features: dragon villagers, Regnitz Cathedral, Palace of Swabia, Burgrave Palace"
    },
    {
        id: '84',
        date: new Date(2023, 10, 16),
        patch: '9.1.109',
        description: "Add Jeanne d'Arc features: (school of cavalry, consecrate, ordinance company)"
    },
    {
        id: '83',
        date: new Date(2023, 10, 13),
        patch: '9.1.109',
        description: 'Add new civilizations, units only'
    },
    {
        id: '82',
        date: new Date(2023, 10, 11),
        patch: '---',
        description: 'Add support resource button'
    },
    {
        id: '81',
        date: new Date(2023, 8, 27),
        patch: '8.2.218',
        description: 'Great Bombard cost reduced from 900 Gold/450 Wood to 800 Gold/450 Wood'
    },
    {
        id: '80',
        date: new Date(2023, 8, 27),
        patch: '8.2.218',
        description: 'Sipahi train time increased from 28 to 30 seconds'
    },
    {
        id: '79',
        date: new Date(2023, 8, 27),
        patch: '8.2.218',
        description: 'Istanbul Observatory Landmark production speed bonus increased from 60% to 100%'
    },
    {
        id: '78',
        date: new Date(2023, 8, 27),
        patch: '8.2.218',
        description: 'Bombard cost reduced from 600 Gold/300 Wood to 500 Gold/350 Wood'
    },
    {
        id: '77',
        date: new Date(2023, 8, 27),
        patch: '8.2.218',
        description: 'Ram train time increased from 30 to 40 seconds'
    },
    {
        id: '76',
        date: new Date(2023, 7, 27),
        patch: '7.1.113',
        description: 'Add warrior monk'
    },
    {
        id: '75',
        date: new Date(2023, 6, 20),
        patch: '7.1.113',
        description: 'Anatolian Hills Technology mining speed bonus increased from 10% to 15%'
    },
    {
        id: '74',
        date: new Date(2023, 6, 20),
        patch: '7.1.113',
        description: 'Sipahi train speed increased from 24 to 28 seconds'
    },
    {
        id: '73',
        date: new Date(2023, 6, 20),
        patch: '7.1.113',
        description: 'Dome of Faith Landmark, no longer has a 50% production speed penalty, gives a discount of -50 gold instead of –65 gold'
    },
    {
        id: '72',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Malian Food gathering technologies now apply to the passive income of cattle garrisoned in ranches'
    },
    {
        id: '71',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Sipahi Cost increased from 110 food/20 wood to 120 food/40 wood'
    },
    {
        id: '70',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: ' Silver Tree Discount and production speed bonus reduced from 50% to 40%'
    },
    {
        id: '69',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Mongol Lancer renamed to Keshik. Cost decreased from 140 food / 100 gold to 120 food / 80 gold. Train time decreased from 35 seconds to 30 seconds'
    },
    {
        id: '68',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Farimba Garrison Landmark train speed decreased by 10%. Archer, Donso, and Musofadi Warrior train time increased from 22 seconds to 24 seconds. Javelin Thrower train time increased from 33 seconds to 37 seconds. Musofadi Gunner train time increased from 52 seconds to 57 seconds'
    },
    {
        id: '67',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Malian Villager cattle gather rate reduced from 0.9 to 0.81 food per second'
    },
    {
        id: '66',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'French Hulk renamed to War Cog. Cost reduced from 120 food / 200 wood / 30 gold to 85 food / 200 wood / 30. gold'
    },
    {
        id: '65',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Delhi Sanctity technology gold income bonus reduced from 50% to 25%'
    },
    {
        id: '64',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Delhi Horseman renamed Ghazi Raider. Cost increased from 100 food / 20 wood to 110 food / 30 wood. Train time increased from 22.5 seconds to 25 seconds'
    },
    {
        id: '63',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Palace Guard cost increased from 100 food / 20 gold to 100 food / 25 gold'
    },
    {
        id: '62',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Zhuge Nu cost adjusted from 20 food / 30 gold / 30 wood to 30 food / 20 gold / 30 wood'
    },
    {
        id: '61',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Camel Rider cost changed from 180 food / 60 gold to 160 food / 30 gold / 30 wood'
    },
    {
        id: '60',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Abbasid Man-at-Arm unit renamed to Ghulam. Cost increased from 100 food / 20 gold to 120 food / 30 gold. Train time increased from 22.5 seconds to 26 seconds'
    },
    {
        id: '59',
        date: new Date(2023, 5, 15),
        patch: '7.0.5861',
        description: 'Fix Man-at-Arm training time from 22s to 22.5s'
    },
    {
        id: '58',
        date: new Date(2023, 4, 14),
        patch: '6.1.130',
        description: 'Add Mongols improved eco upgrades'
    },
    {
        id: '57',
        date: new Date(2023, 3, 5),
        patch: '6.1.130',
        description: 'Ottomans Blacksmith and University production influence bonus reduced from 25/33/40% to 20/30/40%'
    },
    {
        id: '56',
        date: new Date(2023, 3, 5),
        patch: '6.1.130',
        description: ' Ottomans Blacksmith and University production influence bonus reduced from 25/33/40% to 20/30/40%'
    },
    {
        id: '55',
        date: new Date(2023, 3, 5),
        patch: '6.1.130',
        description: ' Sofa train time reduced from 30 to 26 seconds'
    },
    {
        id: '54',
        date: new Date(2023, 3, 5),
        patch: '6.1.130',
        description: 'French Town Center production rate bonus increased from 10/10/15/20% to 10/15/20/25%'
    },
    {
        id: '53',
        date: new Date(2023, 3, 5),
        patch: '6.1.130',
        description: 'Mongol Traction Trebuchet cost reduced from 400 wood 150 gold to 300 wood 100 gold, build time reduced from 35 seconds to 30 seconds'
    },
    {
        id: '52',
        date: new Date(2023, 3, 5),
        patch: '6.1.130',
        description: 'ArrowCounter-weight Trebuchet cost reduced from 500 wood 250 gold to 400 wood 150 gold, build time reduced from 35 seconds to 30 seconds'
    },
    {id: '51', date: new Date(2023, 1, 16), patch: '6.0.878', description: 'Ram - 250 wood, 30 seconds'},
    {
        id: '50',
        date: new Date(2023, 1, 16),
        patch: '6.0.878',
        description: 'Dome of Faith Scholar - Cost reduced from 90 to 65'
    },
    {id: '49', date: new Date(2023, 1, 16), patch: '6.0.878', description: 'Scholar - Cost reduced from 150 to 130'},
    {
        id: '48',
        date: new Date(2023, 1, 16),
        patch: '6.0.878',
        description: 'Farimba Garrison - Gold reduction bonus reduced from 20% to 10%'
    },
    {
        id: '47',
        date: new Date(2023, 1, 16),
        patch: '6.0.878',
        description: 'Enclosures gold generation time increased from every 3.5 second to every 5 seconds'
    },
    {
        id: '46',
        date: new Date(2023, 1, 16),
        patch: '6.0.878',
        description: 'Wynguard Footmen costs 200 food, 500 gold, and takes 50 seconds to train'
    },
    {
        id: '45',
        date: new Date(2023, 1, 16),
        patch: '6.0.878',
        description: 'Wynguard Rangers cost and train time changed from 200 food, 100 gold, and 75 seconds to 250 gold, 450 wood, and 50 seconds'
    },
    {
        id: '44',
        date: new Date(2023, 1, 16),
        patch: '6.0.878',
        description: 'Wynguard Raiders cost and train time changed from 200 food, 100 gold, and 75 seconds to 650 food, 200 gold, and 25 seconds'
    },
    {
        id: '43',
        date: new Date(2023, 1, 16),
        patch: '6.0.878',
        description: 'War Elephant cost reduced from 600f 400g to 400f 350g'
    },
    {
        id: '42',
        date: new Date(2023, 1, 16),
        patch: '6.0.878',
        description: 'Fresh Foodstuffs villager cost bonus reduced from 50% to 35%'
    },
    {
        id: '41',
        date: new Date(2023, 1, 16),
        patch: '6.0.878',
        description: 'Great Bombard (Ottoman) wood cost reduced from 600 to 450'
    },
    {
        id: '40',
        date: new Date(2023, 1, 16),
        patch: '6.0.878',
        description: 'Bombard wood cost reduced from 400 to 300'
    },
    {id: '39', date: new Date(2023, 0, 23), patch: '5.1.148.1', description: 'Add Cattle food source'},
    {
        id: '38',
        date: new Date(2022, 11, 15),
        patch: '5.1.148.1',
        description: 'Fix Ottomans blacksmith influence production time age 4 -33% -> -29%, Istanbul Observatory -40% -> -37%'
    },
    {
        id: '37',
        date: new Date(2022, 11, 12),
        patch: '5.1.148.1',
        description: 'Fix English mma production time -50% -> -32%'
    },
    {
        id: '36',
        date: new Date(2022, 11, 11),
        patch: '5.1.148.1',
        description: 'Fix Mongols Silver Tree. It does not affect other markets any more'
    },
    {
        id: '35',
        date: new Date(2022, 11, 10),
        patch: '5.1.148.1',
        description: 'Fix camel rider production time: 22 sec -> 35 sec'
    },
    {
        id: '34',
        date: new Date(2022, 11, 9),
        patch: '5.1.148.1',
        description: 'Song dynasty villager production time: -35% -> -25%, cattle cost: 75 -> 90 gold'
    },
    {
        id: '33',
        date: new Date(2022, 11, 5),
        patch: '5.1.148',
        description: 'Fix trader cost: 75 wood, 75 gold, 35 sec -> 60 wood, 60 gold, 25 sec'
    },
    {
        id: '32',
        date: new Date(2022, 11, 4),
        patch: '5.1.148',
        description: 'Food gathering rate fix: seep 38.3 -> 37.05, farm 36.25 -> 36.718. Wheelbarrow farms +1% -> +3.2%. Wheelbarrow sheep +1% -> +3%'
    },
    {
        id: '31',
        date: new Date(2022, 11, 1),
        patch: '5.1.148',
        description: 'Cattle cost: 100 -> 75 gold, pit mine gold generation: 30 -> 35 gold/min'
    },
    {id: '30', date: new Date('26 Nov 2022'), patch: ' ---', description: 'Add ships'},
    {
        id: '29',
        date: new Date(2022, 10, 25),
        patch: ' ---',
        description: 'Add Delhi scholar unit, sanctity, dome of faith'
    },
    {id: '28', date: new Date(2022, 10, 25), patch: ' ---', description: 'Add tithe barn'},
    {id: '27', date: new Date(2022, 10, 14), patch: ' ---', description: 'Add relics and sacred sites'},
    {id: '26', date: new Date(2022, 10, 11), patch: ' ---', description: 'Add English farmers count'},
    {id: '25', date: new Date(2022, 10, 10), patch: ' ---', description: 'Add English enclosures'},
    {id: '24', date: new Date(2022, 10, 10), patch: ' ---', description: 'Add English Wynguard Palace'},
    {id: '23', date: new Date(2022, 10, 9), patch: ' ---', description: 'Add Malians Farimba Garrison'},
    {id: '22', date: new Date(2022, 10, 7), patch: ' ---', description: 'Add Malians Fulani Corral'},
    {id: '21', date: new Date(2022, 10, 7), patch: ' ---', description: 'Add Malians cattle ranch'},
    {id: '20', date: new Date(2022, 10, 7), patch: ' ---', description: 'Add Malians pit mine influence'},
    {id: '19', date: new Date(2022, 10, 7), patch: ' ---', description: 'Add Malians cattle unit'},
    {id: '18', date: new Date(2022, 10, 7), patch: ' ---', description: 'Add Malians mansa query'},
    {id: '17', date: new Date(2022, 10, 6), patch: ' ---', description: 'Add ram unit with production time 12s'},
    {id: '16', date: new Date(2022, 10, 6), patch: ' ---', description: 'Temporary remove all ships except fishing'},
    {id: '15', date: new Date(2022, 10, 6), patch: ' ---', description: 'Update fishing boat cost 60 -> 75'},
    {id: '14', date: new Date(2022, 10, 6), patch: ' ---', description: 'Update janissary production time 28s -> 24s'},
    {
        id: '13',
        date: new Date(2022, 10, 6),
        patch: ' ---',
        description: 'Add ottomans features: Twin minaret medrese, anatolian hills, blacksmith influence, sultanhani trade network'
    },
    {
        id: '12',
        date: new Date(2022, 9, 25),
        patch: ' ---',
        description: 'Fix units data: zhuge nu, fire lancer, imperial official'
    },
    {id: '11', date: new Date('13 Oct 2022'), patch: ' ---', description: 'Fix icons for Ottomans and Malians units'},
    {
        id: '10',
        date: new Date(2022, 9, 2),
        patch: ' ---',
        description: 'English update: add ships discount, mma production speed, galley unit, hulk unit'
    },
    {
        id: '9',
        date: new Date(2022, 8, 26),
        patch: ' ---',
        description: 'Add new civs beta - only units with wrong icons for now'
    },
    {
        id: '8',
        date: new Date(2022, 8, 26),
        patch: ' ---',
        description: 'Scout cost fix. Before - 60 food, after - 70 food'
    },
    {
        id: '7',
        date: new Date(2022, 8, 25),
        patch: ' ---',
        description: 'Show only common units without civilization selected'
    },
    {
        id: '6',
        date: new Date(2022, 8, 25),
        patch: ' ---',
        description: 'Fix: longbowman cost (40, 50) differs from archer cost (30, 50)'
    },
    {
        id: '5',
        date: new Date(2022, 8, 25),
        patch: ' ---',
        description: 'Added units: arbaletrier, knight, landsknecht, longbowman, royal knight, tower war elephant, war elephant, palace guard'
    },
    {id: '4', date: new Date(2022, 8, 24), patch: ' ---', description: 'Added streltsy unit'},
    {id: '3', date: new Date(2022, 8, 24), patch: ' ---', description: 'Added unit filter by selected civilization'},
    {
        id: '2',
        date: new Date(2022, 8, 24),
        patch: ' ---',
        description: 'Reduced civilizations dropdown size to contain more civs in the future'
    },
    {id: '1', date: new Date(2022, 8, 24), patch: ' ---', description: 'Added updates modal'},
]

const lastPatchItemsCount = updates.filter(updateItem => updateItem.date === updates[0].date).length;

function UpdatesModalLink() {
    const [show, setShowModal] = useState(false);
    const [showAll, setShowAllItems] = useState(false);

    const itemsCountToShow = showAll ? updates.length : Math.max(15, lastPatchItemsCount);
    let itemsToShow = updates.slice(0, itemsCountToShow)
        .map(item => <li key={item.id}><span>[{item.date.toLocaleDateString('sv')}] [Patch {item.patch}]</span> {item.description}</li>);

    function openModal() {
        setShowAllItems(false);
        setShowModal(true);
    }

    return (
        <>
            <h3 onClick={openModal} className={s.modalLink}>Updates ({updates[0].date.toLocaleDateString('sv')})</h3>

            <Modal show={show} onHide={() => setShowModal(false)} size="lg">
                <Modal.Body bsPrefix={s.modalBody}>
                    <div className={s.header}>
                        <h3>Updates</h3>
                        <div onClick={() => setShowModal(false)} className={s.closeButton}><h3><FontAwesomeIcon icon={faClose}/></h3></div>
                    </div>

                    <hr/>
                    <ul>
                        {itemsToShow}
                        {!showAll? <span className={s.modalLink} onClick={() => setShowAllItems(true)}><u><i>Show All</i></u></span> : ''}
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdatesModalLink;
