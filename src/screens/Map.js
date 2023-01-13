import React, {
  ComponentRef,
  MouseEvent,
  useCallback,
  useRef,
  useState
} from 'react'

import PrismaZoom from 'react-prismazoom'
import { Link } from 'react-router-dom'
import witcherMapt9 from '../assets/WitcherMapX4T9.jpg'

const Map = () => {
  const prismaZoom = useRef(PrismaZoom)
  const zoomCounterRef = useRef(HTMLSpanElement)
  console.log(prismaZoom)
  // const [allowZoom, setAllowZoom] = useState(true);
  // const [allowPan, setAllowPan] = useState(true);

  const onZoomChange = useCallback(zoom => {
    if (!zoomCounterRef.current) return
    zoomCounterRef.current.innerText = `${Math.round(zoom * 100)}%`
  }, [])

  const [novigradHovered, setNovigradHovered] = useState(false)
  const [kaermorhenHovered, setKaermorhenHovered] = useState(false)
  const [cintraHovered, setCintraHovered] = useState(false)
  const [nilfgaardHovered, setNilfgaardHovered] = useState(false)
  const [beauclairHovered, setBeauclairHovered] = useState(false)
  const [vizimaHovered, setVizimaHovered] = useState(false)

  return (
    <>
      <div className='map-global'>
        <PrismaZoom
          className='map-zoom'
          onZoomChange={onZoomChange}
          maxZoom={8}
          minZoom={1}
          ref={node => {
            prismaZoom.current = node
          }}
        >
          <div className='link-town'>
            <img src={witcherMapt9} className='map-image' />
            <div className='towns'>
              <div className='novigrad-town'>
                <Link to={'/novigrad'}>Novigrad</Link>
              </div>
              <div className='kaermorhen-town'>
                <Link to={'/kaermorhen'}>Kaer Morhen</Link>
              </div>
              <div className='cintra-town'>
                <Link to={'/cintratown'}>Cintra</Link>
              </div>
              <div className='nilfgaard-town'>
                <Link to={'/nilfgaardtown'}>Nilfgaard</Link>
              </div>
              <div className='beauclair-town'>
                <Link to={'/beauclair'}>Beauclair</Link>
              </div>
              <div className='vizima-town'>
                <Link to={'/vizima'}>Vizima</Link>
              </div>
            </div>
          </div>
          <div className='link-region'>
            <div className='regions'>
              <div className='kaedwen-region'>
                <Link to={'/kaedwen'}>Kaedwen</Link>
              </div>
              <div className='cintra-region'>
                <Link to={'/cintra'}>Cintra</Link>
              </div>
              <div className='redania-region'>
                <Link to={'/redania'}>Redania</Link>
              </div>
              <div className='nilfgaard-region'>
                <Link to={'/nilfgaard'}>Nilfgaard</Link>
              </div>
              <div className='toussaint-region'>
                <Link to={'/toussaint'}>Toussaint</Link>
              </div>
              <div className='temeria-region'>
                <Link to={'/temeria'}>Temeria</Link>
              </div>
            </div>
          </div>
        </PrismaZoom>
      </div>
    </>
  )
}
export default Map

/* Map & Area tag test : 
function Map() {
  const Nif = {
    filter: 'drop-shadow(-2px·20px·241px·#e32323)'
  }
  return (
    <div>
      <img className='map' src={WitcherMap_BW} useMap='#witcher-map' />
      <map name='witcher-map'>
        <div className='regionNif'>
          <area
            href='#'
            className='Nilfgaard'
            style={Nif}
            target=''
            alt='Nilfgaard'
            title='Nilfgaard'
            coords='1335,2504,1339,2460,1364,2428,1404,2406,1379,2399,1346,2402,1324,2370,1295,2348,1285,2315,1303,2290,1346,2275,1389,2279,1426,2265,1455,2247,1444,2221,1418,2185,1408,2152,1404,2105,1426,2080,1444,2066,1469,2066,1494,2051,1512,2040,1502,2015,1520,2004,1541,1986,1567,1986,1596,1971,1610,1939,1581,1942,1549,1961,1523,1942,1509,1914,1516,1888,1552,1888,1574,1870,1599,1866,1574,1848,1567,1827,1563,1794,1578,1761,1588,1722,1585,1696,1560,1693,1556,1667,1581,1656,1607,1649,1636,1646,1628,1624,1599,1602,1588,1570,1607,1552,1643,1548,1643,1504,1664,1483,1675,1465,1701,1450,1719,1468,1744,1490,1777,1490,1726,1447,1708,1418,1675,1396,1668,1371,1636,1352,1690,1338,1755,1327,1831,1320,1900,1334,1958,1327,1983,1345,2012,1342,2077,1331,2138,1313,2189,1284,2218,1258,2276,1226,2327,1197,2385,1171,2442,1139,2518,1139,2584,1171,2623,1193,2623,1269,2533,1316,2460,1381,2305,1392,2254,1530,2301,1617,2258,1682,2167,1751,2088,1906,2037,2029,2113,2073,2153,2134,2214,2149,2280,2174,2356,2203,2388,2265,2446,2290,2508,2283,2526,2315,2518,2370,2508,2413,2515,2504'
            shape='poly'
          ></area>
        </div>
        <area
          target=''
          alt='Cintra'
          title='Cintra'
          coords='1719,1237,1693,1229,1668,1211,1664,1182,1679,1161,1646,1135,1628,1113,1628,1077,1636,1048,1661,1037,1690,1030,1726,1019,1751,1001,1784,1001,1838,990,1871,976,1892,987,1911,1034,1907,1070,1903,1110,1903,1161,1896,1218,1889,1244,1845,1244,1809,1240,1777,1255,1748,1244'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Sodden'
          title='Sodden'
          coords='1892,1247,1907,1196,1911,1145,1914,1073,1918,1040,1911,1004,1900,979,1936,964,1976,964,2008,979,2048,990,2091,997,2128,997,2167,1004,2207,1019,2196,1062,2229,1120,2214,1174,2178,1207,2110,1218,2052,1232,1990,1236,1929,1247'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Verden'
          title='Verden'
          coords='1628,906,1650,888,1686,880,1719,888,1748,906,1780,906,1795,920,1802,960,1798,985,1773,993,1733,1000,1704,1014,1679,1014,1639,989,1621,967,1643,935'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Brugge'
          title='Brugge'
          coords='1809,970,1806,938,1798,905,1845,880,1882,862,1936,854,1976,858,2001,880,2001,912,1994,938,1958,948,1892,970,1842,977'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Kerack'
          title='Kerack'
          coords='1545,893,1516,914,1487,936,1451,947,1422,914,1436,864,1447,835,1498,838,1538,835,1549,860,1581,860,1578,838,1599,838,1588,813,1599,777,1617,759,1636,770,1657,780,1690,766,1711,780,1683,813,1672,849,1664,875,1643,882,1614,896,1581,875'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Brokilon'
          title='Brokilon'
          coords='1672,870,1683,837,1690,812,1708,790,1726,775,1759,757,1813,746,1849,757,1874,779,1892,801,1921,848,1882,855,1838,880,1798,902,1748,898,1711,880'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Cidaris'
          title='Cidaris'
          coords='1585,804,1545,800,1505,807,1476,778,1487,753,1509,742,1556,742,1588,731,1603,706,1603,677,1646,688,1675,684,1697,666,1719,652,1733,662,1751,681,1780,713,1773,735,1755,753,1693,760,1650,767,1614,746,1596,775'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Temeria'
          title='Temeria'
          coords='1780,686,1806,682,1831,693,1856,711,1878,733,1896,715,1882,686,1860,686,1816,664,1842,646,1889,646,1929,635,1954,631,1979,649,2005,664,2041,668,2041,693,2084,689,2135,678,2164,671,2200,682,2243,664,2280,646,2323,657,2345,686,2356,718,2334,754,2298,776,2283,805,2298,849,2290,888,2269,928,2218,939,2178,953,2167,990,2142,990,2102,986,2059,979,2015,968,1997,950,2019,885,1976,845,1929,849,1896,787,1827,736,1784,740'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Lyria'
          title='Lyria'
          coords='2171,997,2185,957,2211,946,2261,939,2283,925,2330,917,2374,917,2428,921,2468,917,2504,921,2504,950,2442,972,2453,997,2504,1019,2482,1037,2435,1030,2381,1011,2337,1051,2280,1080,2225,1102,2204,1062,2214,1015'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Aedrin'
          title='Aedrin'
          coords='2283,914,2294,889,2305,849,2294,817,2294,791,2316,773,2345,751,2356,726,2363,694,2341,665,2301,639,2323,625,2366,639,2410,650,2439,665,2489,672,2529,723,2573,733,2616,741,2688,737,2750,759,2743,802,2728,838,2696,856,2591,828,2526,875,2479,907,2352,911'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Redania'
          title='Redania'
          coords='1976,637,1983,612,1947,609,1921,605,1921,580,1950,558,1979,580,2005,598,2037,569,2041,536,2048,493,2048,456,2088,438,2149,456,2171,464,2200,467,2225,453,2251,446,2269,446,2272,467,2298,467,2327,500,2345,533,2377,558,2363,619,2305,627,2254,652,2211,674,2160,666,2102,681,2048,684,2048,662,2015,662'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Kwaeden'
          title='Kwaeden'
          coords='2301,455,2316,437,2327,400,2348,382,2356,350,2374,313,2381,277,2417,259,2479,248,2522,230,2540,198,2573,158,2584,122,2627,100,2660,176,2670,241,2660,299,2620,339,2522,353,2432,393,2464,437,2504,462,2565,476,2605,469,2627,505,2609,534,2573,552,2580,581,2594,596,2591,625,2544,636,2518,661,2475,657,2442,654,2406,639,2370,628,2385,556,2352,523'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Jamurlak'
          title='Jamurlak'
          coords='2160,454,2149,418,2153,389,2120,385,2095,382,2088,353,2128,345,2149,334,2131,309,2138,284,2157,273,2182,284,2204,280,2207,251,2204,211,2185,172,2229,157,2269,143,2305,146,2323,164,2330,197,2345,222,2366,244,2385,262,2370,295,2352,345,2337,378,2312,400,2309,443,2283,458,2272,439,2225,443,2204,458'
          shape='poly'
        ></area>
        <area
          target=''
          alt='Kovir/Poviss'
          title='Kovir/Poviss'
          coords='1697,0,1722,43,1730,83,1730,109,1708,130,1686,156,1711,152,1704,181,1690,214,1733,192,1733,210,1769,192,1802,192,1780,214,1769,246,1769,279,1748,297,1744,322,1759,337,1791,322,1820,311,1831,337,1860,348,1892,326,1921,308,1943,315,1961,348,1983,348,1997,326,2012,300,2030,293,2037,311,2055,319,2077,315,2091,297,2110,297,2135,286,2149,268,2178,279,2200,275,2200,224,2189,199,2175,163,2059,214,2012,210,2015,134,1965,90,1990,-4'
          shape='poly'
        ></area>
      </map>
    </div>
  )
} */
