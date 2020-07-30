import { Injectable } from '@angular/core';
import { ApiServerService } from '../utils/api-server.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private data:Cities[] = [
		{
			"id": 2,
			"city_code": "5002",
			"name_city": "Abejorral (Antioquia)"
		},
		{
			"id": 781,
			"city_code": "54003",
			"name_city": "Ábrego (Norte de Santander)"
		},
		{
			"id": 3,
			"city_code": "5004",
			"name_city": "Abriaquí (Antioquia)"
		},
		{
			"id": 688,
			"city_code": "50006",
			"name_city": "Acacías (Meta)"
		},
		{
			"id": 576,
			"city_code": "27006",
			"name_city": "Acandí (Chocó)"
		},
		{
			"id": 606,
			"city_code": "41006",
			"name_city": "Acevedo (Huila)"
		},
		{
			"id": 151,
			"city_code": "13006",
			"name_city": "Achí (Bolívar)"
		},
		{
			"id": 607,
			"city_code": "41013",
			"name_city": "Agrado (Huila)"
		},
		{
			"id": 459,
			"city_code": "25001",
			"name_city": "Agua De Dios (Cundinamarca)"
		},
		{
			"id": 405,
			"city_code": "20011",
			"name_city": "Aguachica (Cesar)"
		},
		{
			"id": 847,
			"city_code": "68013",
			"name_city": "Aguada (Santander)"
		},
		{
			"id": 320,
			"city_code": "17013",
			"name_city": "Aguadas (Caldas)"
		},
		{
			"id": 1056,
			"city_code": "85010",
			"name_city": "Aguazul (Casanare)"
		},
		{
			"id": 406,
			"city_code": "20013",
			"name_city": "Agustín Codazzi (Cesar)"
		},
		{
			"id": 608,
			"city_code": "41016",
			"name_city": "Aipe (Huila)"
		},
		{
			"id": 460,
			"city_code": "25019",
			"name_city": "Albán (Cundinamarca)"
		},
		{
			"id": 717,
			"city_code": "52019",
			"name_city": "Albán (Nariño)"
		},
		{
			"id": 347,
			"city_code": "18029",
			"name_city": "Albania (Caquetá)"
		},
		{
			"id": 643,
			"city_code": "44035",
			"name_city": "Albania (La Guajira)"
		},
		{
			"id": 848,
			"city_code": "68020",
			"name_city": "Albania (Santander)"
		},
		{
			"id": 1007,
			"city_code": "76020",
			"name_city": "Alcalá (Valle del Cauca)"
		},
		{
			"id": 718,
			"city_code": "52022",
			"name_city": "Aldana (Nariño)"
		},
		{
			"id": 4,
			"city_code": "5021",
			"name_city": "Alejandría (Antioquia)"
		},
		{
			"id": 658,
			"city_code": "47030",
			"name_city": "Algarrobo (Magdalena)"
		},
		{
			"id": 609,
			"city_code": "41020",
			"name_city": "Algeciras (Huila)"
		},
		{
			"id": 363,
			"city_code": "19022",
			"name_city": "Almaguer (Cauca)"
		},
		{
			"id": 197,
			"city_code": "15022",
			"name_city": "Almeida (Boyacá)"
		},
		{
			"id": 960,
			"city_code": "73024",
			"name_city": "Alpujarra (Tolima)"
		},
		{
			"id": 610,
			"city_code": "41026",
			"name_city": "Altamira (Huila)"
		},
		{
			"id": 577,
			"city_code": "27025",
			"name_city": "Alto Baudó (Chocó)"
		},
		{
			"id": 152,
			"city_code": "13030",
			"name_city": "Altos Del Rosario (Bolívar)"
		},
		{
			"id": 961,
			"city_code": "73026",
			"name_city": "Alvarado (Tolima)"
		},
		{
			"id": 5,
			"city_code": "5030",
			"name_city": "Amagá (Antioquia)"
		},
		{
			"id": 6,
			"city_code": "5031",
			"name_city": "Amalfi (Antioquia)"
		},
		{
			"id": 962,
			"city_code": "73030",
			"name_city": "Ambalema (Tolima)"
		},
		{
			"id": 461,
			"city_code": "25035",
			"name_city": "Anapoima (Cundinamarca)"
		},
		{
			"id": 719,
			"city_code": "52036",
			"name_city": "Ancuyá (Nariño)"
		},
		{
			"id": 1008,
			"city_code": "76036",
			"name_city": "Andalucía (Valle del Cauca)"
		},
		{
			"id": 7,
			"city_code": "5034",
			"name_city": "Andes (Antioquia)"
		},
		{
			"id": 8,
			"city_code": "5036",
			"name_city": "Angelópolis (Antioquia)"
		},
		{
			"id": 9,
			"city_code": "5038",
			"name_city": "Angostura (Antioquia)"
		},
		{
			"id": 462,
			"city_code": "25040",
			"name_city": "Anolaima (Cundinamarca)"
		},
		{
			"id": 10,
			"city_code": "5040",
			"name_city": "Anorí (Antioquia)"
		},
		{
			"id": 321,
			"city_code": "17042",
			"name_city": "Anserma (Caldas)"
		},
		{
			"id": 1009,
			"city_code": "76041",
			"name_city": "Ansermanuevo (Valle del Cauca)"
		},
		{
			"id": 12,
			"city_code": "5044",
			"name_city": "Anzá (Antioquia)"
		},
		{
			"id": 963,
			"city_code": "73043",
			"name_city": "Anzoátegui (Tolima)"
		},
		{
			"id": 13,
			"city_code": "5045",
			"name_city": "Apartadó (Antioquia)"
		},
		{
			"id": 833,
			"city_code": "66045",
			"name_city": "Apía (Risaralda)"
		},
		{
			"id": 533,
			"city_code": "25599",
			"name_city": "Apulo (Cundinamarca)"
		},
		{
			"id": 198,
			"city_code": "15047",
			"name_city": "Aquitania (Boyacá)"
		},
		{
			"id": 659,
			"city_code": "47053",
			"name_city": "Aracataca (Magdalena)"
		},
		{
			"id": 322,
			"city_code": "17050",
			"name_city": "Aranzazu (Caldas)"
		},
		{
			"id": 849,
			"city_code": "68051",
			"name_city": "Aratoca (Santander)"
		},
		{
			"id": 1048,
			"city_code": "81001",
			"name_city": "Arauca (Arauca)"
		},
		{
			"id": 1049,
			"city_code": "81065",
			"name_city": "Arauquita (Arauca)"
		},
		{
			"id": 463,
			"city_code": "25053",
			"name_city": "Arbeláez (Cundinamarca)"
		},
		{
			"id": 720,
			"city_code": "52051",
			"name_city": "Arboleda (Nariño)"
		},
		{
			"id": 782,
			"city_code": "54051",
			"name_city": "Arboledas (Norte de Santander)"
		},
		{
			"id": 14,
			"city_code": "5051",
			"name_city": "Arboletes (Antioquia)"
		},
		{
			"id": 199,
			"city_code": "15051",
			"name_city": "Arcabuco (Boyacá)"
		},
		{
			"id": 153,
			"city_code": "13042",
			"name_city": "Arenal (Bolívar)"
		},
		{
			"id": 15,
			"city_code": "5055",
			"name_city": "Argelia (Antioquia)"
		},
		{
			"id": 364,
			"city_code": "19050",
			"name_city": "Argelia (Cauca)"
		},
		{
			"id": 1010,
			"city_code": "76054",
			"name_city": "Argelia (Valle del Cauca)"
		},
		{
			"id": 660,
			"city_code": "47058",
			"name_city": "Ariguaní (Magdalena)"
		},
		{
			"id": 154,
			"city_code": "13052",
			"name_city": "Arjona (Bolívar)"
		},
		{
			"id": 16,
			"city_code": "5059",
			"name_city": "Armenia (Antioquia)"
		},
		{
			"id": 820,
			"city_code": "63001",
			"name_city": "Armenia (Quindío)"
		},
		{
			"id": 964,
			"city_code": "73055",
			"name_city": "Armero (Tolima)"
		},
		{
			"id": 155,
			"city_code": "13062",
			"name_city": "Arroyohondo (Bolívar)"
		},
		{
			"id": 407,
			"city_code": "20032",
			"name_city": "Astrea (Cesar)"
		},
		{
			"id": 965,
			"city_code": "73067",
			"name_city": "Ataco (Tolima)"
		},
		{
			"id": 578,
			"city_code": "27050",
			"name_city": "Atrato (Chocó)"
		},
		{
			"id": 430,
			"city_code": "23068",
			"name_city": "Ayapel (Córdoba)"
		},
		{
			"id": 579,
			"city_code": "27073",
			"name_city": "Bagadó (Chocó)"
		},
		{
			"id": 580,
			"city_code": "27075",
			"name_city": "Bahía Solano (Chocó)"
		},
		{
			"id": 581,
			"city_code": "27077",
			"name_city": "Bajo Baudó (Chocó)"
		},
		{
			"id": 365,
			"city_code": "19075",
			"name_city": "Balboa (Cauca)"
		},
		{
			"id": 834,
			"city_code": "66075",
			"name_city": "Balboa (Risaralda)"
		},
		{
			"id": 127,
			"city_code": "8078",
			"name_city": "Baranoa (Atlántico)"
		},
		{
			"id": 611,
			"city_code": "41078",
			"name_city": "Baraya (Huila)"
		},
		{
			"id": 721,
			"city_code": "52079",
			"name_city": "Barbacoas (Nariño)"
		},
		{
			"id": 17,
			"city_code": "5079",
			"name_city": "Barbosa (Antioquia)"
		},
		{
			"id": 850,
			"city_code": "68077",
			"name_city": "Barbosa (Santander)"
		},
		{
			"id": 851,
			"city_code": "68079",
			"name_city": "Barichara (Santander)"
		},
		{
			"id": 689,
			"city_code": "50110",
			"name_city": "Barranca De Upía (Meta)"
		},
		{
			"id": 852,
			"city_code": "68081",
			"name_city": "Barrancabermeja (Santander)"
		},
		{
			"id": 644,
			"city_code": "44078",
			"name_city": "Barrancas (La Guajira)"
		},
		{
			"id": 156,
			"city_code": "13074",
			"name_city": "Barranco De Loba (Bolívar)"
		},
		{
			"id": 1101,
			"city_code": "94343",
			"name_city": "Barranco Minas (Guainía)"
		},
		{
			"id": 126,
			"city_code": "8001",
			"name_city": "Barranquilla (Atlántico)"
		},
		{
			"id": 408,
			"city_code": "20045",
			"name_city": "Becerril (Cesar)"
		},
		{
			"id": 323,
			"city_code": "17088",
			"name_city": "Belalcázar (Caldas)"
		},
		{
			"id": 200,
			"city_code": "15087",
			"name_city": "Belén (Boyacá)"
		},
		{
			"id": 722,
			"city_code": "52083",
			"name_city": "Belén (Nariño)"
		},
		{
			"id": 348,
			"city_code": "18094",
			"name_city": "Belén De Los Andaquíes (Caquetá)"
		},
		{
			"id": 835,
			"city_code": "66088",
			"name_city": "Belén De Umbría (Risaralda)"
		},
		{
			"id": 19,
			"city_code": "5088",
			"name_city": "Bello (Antioquia)"
		},
		{
			"id": 18,
			"city_code": "5086",
			"name_city": "Belmira (Antioquia)"
		},
		{
			"id": 464,
			"city_code": "25086",
			"name_city": "Beltrán (Cundinamarca)"
		},
		{
			"id": 201,
			"city_code": "15090",
			"name_city": "Berbeo (Boyacá)"
		},
		{
			"id": 20,
			"city_code": "5091",
			"name_city": "Betania (Antioquia)"
		},
		{
			"id": 202,
			"city_code": "15092",
			"name_city": "Betéitiva (Boyacá)"
		},
		{
			"id": 21,
			"city_code": "5093",
			"name_city": "Betulia (Antioquia)"
		},
		{
			"id": 853,
			"city_code": "68092",
			"name_city": "Betulia (Santander)"
		},
		{
			"id": 465,
			"city_code": "25095",
			"name_city": "Bituima (Cundinamarca)"
		},
		{
			"id": 203,
			"city_code": "15097",
			"name_city": "Boavita (Boyacá)"
		},
		{
			"id": 783,
			"city_code": "54099",
			"name_city": "Bochalema (Norte de Santander)"
		},
		{
			"id": 149,
			"city_code": "11001",
			"name_city": "Bogotá, D.c. (Bogotá)"
		},
		{
			"id": 466,
			"city_code": "25099",
			"name_city": "Bojacá (Cundinamarca)"
		},
		{
			"id": 582,
			"city_code": "27099",
			"name_city": "Bojayá (Chocó)"
		},
		{
			"id": 366,
			"city_code": "19100",
			"name_city": "Bolívar (Cauca)"
		},
		{
			"id": 854,
			"city_code": "68101",
			"name_city": "Bolívar (Santander)"
		},
		{
			"id": 1011,
			"city_code": "76100",
			"name_city": "Bolívar (Valle del Cauca)"
		},
		{
			"id": 409,
			"city_code": "20060",
			"name_city": "Bosconia (Cesar)"
		},
		{
			"id": 204,
			"city_code": "15104",
			"name_city": "Boyacá (Boyacá)"
		},
		{
			"id": 23,
			"city_code": "5107",
			"name_city": "Briceño (Antioquia)"
		},
		{
			"id": 205,
			"city_code": "15106",
			"name_city": "Briceño (Boyacá)"
		},
		{
			"id": 846,
			"city_code": "68001",
			"name_city": "Bucaramanga (Santander)"
		},
		{
			"id": 784,
			"city_code": "54109",
			"name_city": "Bucarasica (Norte de Santander)"
		},
		{
			"id": 1012,
			"city_code": "76109",
			"name_city": "Buenaventura (Valle del Cauca)"
		},
		{
			"id": 206,
			"city_code": "15109",
			"name_city": "Buenavista (Boyacá)"
		},
		{
			"id": 431,
			"city_code": "23079",
			"name_city": "Buenavista (Córdoba)"
		},
		{
			"id": 821,
			"city_code": "63111",
			"name_city": "Buenavista (Quindío)"
		},
		{
			"id": 934,
			"city_code": "70110",
			"name_city": "Buenavista (Sucre)"
		},
		{
			"id": 367,
			"city_code": "19110",
			"name_city": "Buenos Aires (Cauca)"
		},
		{
			"id": 723,
			"city_code": "52110",
			"name_city": "Buesaco (Nariño)"
		},
		{
			"id": 1014,
			"city_code": "76113",
			"name_city": "Bugalagrande (Valle del Cauca)"
		},
		{
			"id": 24,
			"city_code": "5113",
			"name_city": "Buriticá (Antioquia)"
		},
		{
			"id": 207,
			"city_code": "15114",
			"name_city": "Busbanzá (Boyacá)"
		},
		{
			"id": 467,
			"city_code": "25120",
			"name_city": "Cabrera (Cundinamarca)"
		},
		{
			"id": 855,
			"city_code": "68121",
			"name_city": "Cabrera (Santander)"
		},
		{
			"id": 690,
			"city_code": "50124",
			"name_city": "Cabuyaro (Meta)"
		},
		{
			"id": 1106,
			"city_code": "94886",
			"name_city": "Cacahual (Guainía)"
		},
		{
			"id": 25,
			"city_code": "5120",
			"name_city": "Cáceres (Antioquia)"
		},
		{
			"id": 468,
			"city_code": "25123",
			"name_city": "Cachipay (Cundinamarca)"
		},
		{
			"id": 786,
			"city_code": "54128",
			"name_city": "Cáchira (Norte de Santander)"
		},
		{
			"id": 785,
			"city_code": "54125",
			"name_city": "Cácota (Norte de Santander)"
		},
		{
			"id": 26,
			"city_code": "5125",
			"name_city": "Caicedo (Antioquia)"
		},
		{
			"id": 1015,
			"city_code": "76122",
			"name_city": "Caicedonia (Valle del Cauca)"
		},
		{
			"id": 935,
			"city_code": "70124",
			"name_city": "Caimito (Sucre)"
		},
		{
			"id": 966,
			"city_code": "73124",
			"name_city": "Cajamarca (Tolima)"
		},
		{
			"id": 368,
			"city_code": "19130",
			"name_city": "Cajibío (Cauca)"
		},
		{
			"id": 469,
			"city_code": "25126",
			"name_city": "Cajicá (Cundinamarca)"
		},
		{
			"id": 157,
			"city_code": "13140",
			"name_city": "Calamar (Bolívar)"
		},
		{
			"id": 1110,
			"city_code": "95015",
			"name_city": "Calamar (Guaviare)"
		},
		{
			"id": 822,
			"city_code": "63130",
			"name_city": "Calarcá (Quindío)"
		},
		{
			"id": 27,
			"city_code": "5129",
			"name_city": "Caldas (Antioquia)"
		},
		{
			"id": 208,
			"city_code": "15131",
			"name_city": "Caldas (Boyacá)"
		},
		{
			"id": 369,
			"city_code": "19137",
			"name_city": "Caldono (Cauca)"
		},
		{
			"id": 1006,
			"city_code": "76001",
			"name_city": "Cali (Valle del Cauca)"
		},
		{
			"id": 856,
			"city_code": "68132",
			"name_city": "California (Santander)"
		},
		{
			"id": 1016,
			"city_code": "76126",
			"name_city": "Calima (Valle del Cauca)"
		},
		{
			"id": 370,
			"city_code": "19142",
			"name_city": "Caloto (Cauca)"
		},
		{
			"id": 28,
			"city_code": "5134",
			"name_city": "Campamento (Antioquia)"
		},
		{
			"id": 128,
			"city_code": "8137",
			"name_city": "Campo De La Cruz (Atlántico)"
		},
		{
			"id": 612,
			"city_code": "41132",
			"name_city": "Campoalegre (Huila)"
		},
		{
			"id": 209,
			"city_code": "15135",
			"name_city": "Campohermoso (Boyacá)"
		},
		{
			"id": 432,
			"city_code": "23090",
			"name_city": "Canalete (Córdoba)"
		},
		{
			"id": 29,
			"city_code": "5138",
			"name_city": "Cañasgordas (Antioquia)"
		},
		{
			"id": 129,
			"city_code": "8141",
			"name_city": "Candelaria (Atlántico)"
		},
		{
			"id": 1017,
			"city_code": "76130",
			"name_city": "Candelaria (Valle del Cauca)"
		},
		{
			"id": 158,
			"city_code": "13160",
			"name_city": "Cantagallo (Bolívar)"
		},
		{
			"id": 470,
			"city_code": "25148",
			"name_city": "Caparrapí (Cundinamarca)"
		},
		{
			"id": 857,
			"city_code": "68147",
			"name_city": "Capitanejo (Santander)"
		},
		{
			"id": 471,
			"city_code": "25151",
			"name_city": "Cáqueza (Cundinamarca)"
		},
		{
			"id": 30,
			"city_code": "5142",
			"name_city": "Caracolí (Antioquia)"
		},
		{
			"id": 31,
			"city_code": "5145",
			"name_city": "Caramanta (Antioquia)"
		},
		{
			"id": 858,
			"city_code": "68152",
			"name_city": "Carcasí (Santander)"
		},
		{
			"id": 32,
			"city_code": "5147",
			"name_city": "Carepa (Antioquia)"
		},
		{
			"id": 967,
			"city_code": "73148",
			"name_city": "Carmen De Apicalá (Tolima)"
		},
		{
			"id": 472,
			"city_code": "25154",
			"name_city": "Carmen De Carupa (Cundinamarca)"
		},
		{
			"id": 584,
			"city_code": "27150",
			"name_city": "Carmen Del Darién (Chocó)"
		},
		{
			"id": 34,
			"city_code": "5150",
			"name_city": "Carolina (Antioquia)"
		},
		{
			"id": 150,
			"city_code": "13001",
			"name_city": "Cartagena De Indias (Bolívar)"
		},
		{
			"id": 349,
			"city_code": "18150",
			"name_city": "Cartagena Del Chairá (Caquetá)"
		},
		{
			"id": 1018,
			"city_code": "76147",
			"name_city": "Cartago (Valle del Cauca)"
		},
		{
			"id": 1114,
			"city_code": "97161",
			"name_city": "Carurú (Vaupés)"
		},
		{
			"id": 968,
			"city_code": "73152",
			"name_city": "Casabianca (Tolima)"
		},
		{
			"id": 691,
			"city_code": "50150",
			"name_city": "Castilla La Nueva (Meta)"
		},
		{
			"id": 35,
			"city_code": "5154",
			"name_city": "Caucasia (Antioquia)"
		},
		{
			"id": 859,
			"city_code": "68160",
			"name_city": "Cepitá (Santander)"
		},
		{
			"id": 433,
			"city_code": "23162",
			"name_city": "Cereté (Córdoba)"
		},
		{
			"id": 210,
			"city_code": "15162",
			"name_city": "Cerinza (Boyacá)"
		},
		{
			"id": 860,
			"city_code": "68162",
			"name_city": "Cerrito (Santander)"
		},
		{
			"id": 661,
			"city_code": "47161",
			"name_city": "Cerro De San Antonio (Magdalena)"
		},
		{
			"id": 585,
			"city_code": "27160",
			"name_city": "Cértegui (Chocó)"
		},
		{
			"id": 731,
			"city_code": "52240",
			"name_city": "Chachagüí (Nariño)"
		},
		{
			"id": 473,
			"city_code": "25168",
			"name_city": "Chaguaní (Cundinamarca)"
		},
		{
			"id": 939,
			"city_code": "70230",
			"name_city": "Chalán (Sucre)"
		},
		{
			"id": 1057,
			"city_code": "85015",
			"name_city": "Chámeza (Casanare)"
		},
		{
			"id": 969,
			"city_code": "73168",
			"name_city": "Chaparral (Tolima)"
		},
		{
			"id": 861,
			"city_code": "68167",
			"name_city": "Charalá (Santander)"
		},
		{
			"id": 862,
			"city_code": "68169",
			"name_city": "Charta (Santander)"
		},
		{
			"id": 474,
			"city_code": "25175",
			"name_city": "Chía (Cundinamarca)"
		},
		{
			"id": 36,
			"city_code": "5172",
			"name_city": "Chigorodó (Antioquia)"
		},
		{
			"id": 434,
			"city_code": "23168",
			"name_city": "Chimá (Córdoba)"
		},
		{
			"id": 863,
			"city_code": "68176",
			"name_city": "Chima (Santander)"
		},
		{
			"id": 410,
			"city_code": "20175",
			"name_city": "Chimichagua (Cesar)"
		},
		{
			"id": 787,
			"city_code": "54172",
			"name_city": "Chinácota (Norte de Santander)"
		},
		{
			"id": 211,
			"city_code": "15172",
			"name_city": "Chinavita (Boyacá)"
		},
		{
			"id": 324,
			"city_code": "17174",
			"name_city": "Chinchiná (Caldas)"
		},
		{
			"id": 435,
			"city_code": "23182",
			"name_city": "Chinú (Córdoba)"
		},
		{
			"id": 475,
			"city_code": "25178",
			"name_city": "Chipaque (Cundinamarca)"
		},
		{
			"id": 864,
			"city_code": "68179",
			"name_city": "Chipatá (Santander)"
		},
		{
			"id": 212,
			"city_code": "15176",
			"name_city": "Chiquinquirá (Boyacá)"
		},
		{
			"id": 225,
			"city_code": "15232",
			"name_city": "Chíquiza (Boyacá)"
		},
		{
			"id": 411,
			"city_code": "20178",
			"name_city": "Chiriguaná (Cesar)"
		},
		{
			"id": 213,
			"city_code": "15180",
			"name_city": "Chiscas (Boyacá)"
		},
		{
			"id": 214,
			"city_code": "15183",
			"name_city": "Chita (Boyacá)"
		},
		{
			"id": 788,
			"city_code": "54174",
			"name_city": "Chitagá (Norte de Santander)"
		},
		{
			"id": 215,
			"city_code": "15185",
			"name_city": "Chitaraque (Boyacá)"
		},
		{
			"id": 216,
			"city_code": "15187",
			"name_city": "Chivatá (Boyacá)"
		},
		{
			"id": 662,
			"city_code": "47170",
			"name_city": "Chivolo (Magdalena)"
		},
		{
			"id": 226,
			"city_code": "15236",
			"name_city": "Chivor (Boyacá)"
		},
		{
			"id": 476,
			"city_code": "25181",
			"name_city": "Choachí (Cundinamarca)"
		},
		{
			"id": 477,
			"city_code": "25183",
			"name_city": "Chocontá (Cundinamarca)"
		},
		{
			"id": 159,
			"city_code": "13188",
			"name_city": "Cicuco (Bolívar)"
		},
		{
			"id": 663,
			"city_code": "47189",
			"name_city": "Ciénaga (Magdalena)"
		},
		{
			"id": 436,
			"city_code": "23189",
			"name_city": "Ciénaga De Oro (Córdoba)"
		},
		{
			"id": 217,
			"city_code": "15189",
			"name_city": "Ciénega (Boyacá)"
		},
		{
			"id": 865,
			"city_code": "68190",
			"name_city": "Cimitarra (Santander)"
		},
		{
			"id": 823,
			"city_code": "63190",
			"name_city": "Circasia (Quindío)"
		},
		{
			"id": 37,
			"city_code": "5190",
			"name_city": "Cisneros (Antioquia)"
		},
		{
			"id": 22,
			"city_code": "5101",
			"name_city": "Ciudad Bolívar (Antioquia)"
		},
		{
			"id": 161,
			"city_code": "13222",
			"name_city": "Clemencia (Bolívar)"
		},
		{
			"id": 38,
			"city_code": "5197",
			"name_city": "Cocorná (Antioquia)"
		},
		{
			"id": 970,
			"city_code": "73200",
			"name_city": "Coello (Tolima)"
		},
		{
			"id": 478,
			"city_code": "25200",
			"name_city": "Cogua (Cundinamarca)"
		},
		{
			"id": 613,
			"city_code": "41206",
			"name_city": "Colombia (Huila)"
		},
		{
			"id": 724,
			"city_code": "52203",
			"name_city": "Colón (Nariño)"
		},
		{
			"id": 1075,
			"city_code": "86219",
			"name_city": "Colón (Putumayo)"
		},
		{
			"id": 936,
			"city_code": "70204",
			"name_city": "Colosó (Sucre)"
		},
		{
			"id": 218,
			"city_code": "15204",
			"name_city": "Cómbita (Boyacá)"
		},
		{
			"id": 39,
			"city_code": "5206",
			"name_city": "Concepción (Antioquia)"
		},
		{
			"id": 866,
			"city_code": "68207",
			"name_city": "Concepción (Santander)"
		},
		{
			"id": 40,
			"city_code": "5209",
			"name_city": "Concordia (Antioquia)"
		},
		{
			"id": 664,
			"city_code": "47205",
			"name_city": "Concordia (Magdalena)"
		},
		{
			"id": 586,
			"city_code": "27205",
			"name_city": "Condoto (Chocó)"
		},
		{
			"id": 867,
			"city_code": "68209",
			"name_city": "Confines (Santander)"
		},
		{
			"id": 725,
			"city_code": "52207",
			"name_city": "Consacá (Nariño)"
		},
		{
			"id": 726,
			"city_code": "52210",
			"name_city": "Contadero (Nariño)"
		},
		{
			"id": 868,
			"city_code": "68211",
			"name_city": "Contratación (Santander)"
		},
		{
			"id": 789,
			"city_code": "54206",
			"name_city": "Convención (Norte de Santander)"
		},
		{
			"id": 41,
			"city_code": "5212",
			"name_city": "Copacabana (Antioquia)"
		},
		{
			"id": 219,
			"city_code": "15212",
			"name_city": "Coper (Boyacá)"
		},
		{
			"id": 160,
			"city_code": "13212",
			"name_city": "Córdoba (Bolívar)"
		},
		{
			"id": 727,
			"city_code": "52215",
			"name_city": "Córdoba (Nariño)"
		},
		{
			"id": 824,
			"city_code": "63212",
			"name_city": "Córdoba (Quindío)"
		},
		{
			"id": 371,
			"city_code": "19212",
			"name_city": "Corinto (Cauca)"
		},
		{
			"id": 869,
			"city_code": "68217",
			"name_city": "Coromoro (Santander)"
		},
		{
			"id": 937,
			"city_code": "70215",
			"name_city": "Corozal (Sucre)"
		},
		{
			"id": 220,
			"city_code": "15215",
			"name_city": "Corrales (Boyacá)"
		},
		{
			"id": 479,
			"city_code": "25214",
			"name_city": "Cota (Cundinamarca)"
		},
		{
			"id": 437,
			"city_code": "23300",
			"name_city": "Cotorra (Córdoba)"
		},
		{
			"id": 221,
			"city_code": "15218",
			"name_city": "Covarachía (Boyacá)"
		},
		{
			"id": 938,
			"city_code": "70221",
			"name_city": "Coveñas (Sucre)"
		},
		{
			"id": 971,
			"city_code": "73217",
			"name_city": "Coyaima (Tolima)"
		},
		{
			"id": 1050,
			"city_code": "81220",
			"name_city": "Cravo Norte (Arauca)"
		},
		{
			"id": 728,
			"city_code": "52224",
			"name_city": "Cuaspúd (Nariño)"
		},
		{
			"id": 222,
			"city_code": "15223",
			"name_city": "Cubará (Boyacá)"
		},
		{
			"id": 692,
			"city_code": "50223",
			"name_city": "Cubarral (Meta)"
		},
		{
			"id": 223,
			"city_code": "15224",
			"name_city": "Cucaita (Boyacá)"
		},
		{
			"id": 480,
			"city_code": "25224",
			"name_city": "Cucunubá (Cundinamarca)"
		},
		{
			"id": 790,
			"city_code": "54223",
			"name_city": "Cucutilla (Norte de Santander)"
		},
		{
			"id": 224,
			"city_code": "15226",
			"name_city": "Cuítiva (Boyacá)"
		},
		{
			"id": 693,
			"city_code": "50226",
			"name_city": "Cumaral (Meta)"
		},
		{
			"id": 1122,
			"city_code": "99773",
			"name_city": "Cumaribo (Vichada)"
		},
		{
			"id": 729,
			"city_code": "52227",
			"name_city": "Cumbal (Nariño)"
		},
		{
			"id": 730,
			"city_code": "52233",
			"name_city": "Cumbitara (Nariño)"
		},
		{
			"id": 972,
			"city_code": "73226",
			"name_city": "Cunday (Tolima)"
		},
		{
			"id": 350,
			"city_code": "18205",
			"name_city": "Curillo (Caquetá)"
		},
		{
			"id": 870,
			"city_code": "68229",
			"name_city": "Curití (Santander)"
		},
		{
			"id": 412,
			"city_code": "20228",
			"name_city": "Curumaní (Cesar)"
		},
		{
			"id": 42,
			"city_code": "5234",
			"name_city": "Dabeiba (Antioquia)"
		},
		{
			"id": 1019,
			"city_code": "76233",
			"name_city": "Dagua (Valle del Cauca)"
		},
		{
			"id": 645,
			"city_code": "44090",
			"name_city": "Dibulla (La Guajira)"
		},
		{
			"id": 646,
			"city_code": "44098",
			"name_city": "Distracción (La Guajira)"
		},
		{
			"id": 973,
			"city_code": "73236",
			"name_city": "Dolores (Tolima)"
		},
		{
			"id": 43,
			"city_code": "5237",
			"name_city": "Donmatías (Antioquia)"
		},
		{
			"id": 836,
			"city_code": "66170",
			"name_city": "Dosquebradas (Risaralda)"
		},
		{
			"id": 227,
			"city_code": "15238",
			"name_city": "Duitama (Boyacá)"
		},
		{
			"id": 791,
			"city_code": "54239",
			"name_city": "Durania (Norte de Santander)"
		},
		{
			"id": 44,
			"city_code": "5240",
			"name_city": "Ebéjico (Antioquia)"
		},
		{
			"id": 1020,
			"city_code": "76243",
			"name_city": "El Águila (Valle del Cauca)"
		},
		{
			"id": 45,
			"city_code": "5250",
			"name_city": "El Bagre (Antioquia)"
		},
		{
			"id": 665,
			"city_code": "47245",
			"name_city": "El Banco (Magdalena)"
		},
		{
			"id": 1021,
			"city_code": "76246",
			"name_city": "El Cairo (Valle del Cauca)"
		},
		{
			"id": 694,
			"city_code": "50245",
			"name_city": "El Calvario (Meta)"
		},
		{
			"id": 583,
			"city_code": "27135",
			"name_city": "El Cantón Del San Pablo (Chocó)"
		},
		{
			"id": 792,
			"city_code": "54245",
			"name_city": "El Carmen (Norte de Santander)"
		},
		{
			"id": 587,
			"city_code": "27245",
			"name_city": "El Carmen De Atrato (Chocó)"
		},
		{
			"id": 162,
			"city_code": "13244",
			"name_city": "El Carmen De Bolívar (Bolívar)"
		},
		{
			"id": 871,
			"city_code": "68235",
			"name_city": "El Carmen De Chucurí (Santander)"
		},
		{
			"id": 33,
			"city_code": "5148",
			"name_city": "El Carmen De Viboral (Antioquia)"
		},
		{
			"id": 695,
			"city_code": "50251",
			"name_city": "El Castillo (Meta)"
		},
		{
			"id": 1022,
			"city_code": "76248",
			"name_city": "El Cerrito (Valle del Cauca)"
		},
		{
			"id": 732,
			"city_code": "52250",
			"name_city": "El Charco (Nariño)"
		},
		{
			"id": 228,
			"city_code": "15244",
			"name_city": "El Cocuy (Boyacá)"
		},
		{
			"id": 481,
			"city_code": "25245",
			"name_city": "El Colegio (Cundinamarca)"
		},
		{
			"id": 413,
			"city_code": "20238",
			"name_city": "El Copey (Cesar)"
		},
		{
			"id": 351,
			"city_code": "18247",
			"name_city": "El Doncello (Caquetá)"
		},
		{
			"id": 696,
			"city_code": "50270",
			"name_city": "El Dorado (Meta)"
		},
		{
			"id": 1023,
			"city_code": "76250",
			"name_city": "El Dovio (Valle del Cauca)"
		},
		{
			"id": 1090,
			"city_code": "91263",
			"name_city": "El Encanto (Amazonas)"
		},
		{
			"id": 229,
			"city_code": "15248",
			"name_city": "El Espino (Boyacá)"
		},
		{
			"id": 872,
			"city_code": "68245",
			"name_city": "El Guacamayo (Santander)"
		},
		{
			"id": 163,
			"city_code": "13248",
			"name_city": "El Guamo (Bolívar)"
		},
		{
			"id": 588,
			"city_code": "27250",
			"name_city": "El Litoral Del San Juan (Chocó)"
		},
		{
			"id": 647,
			"city_code": "44110",
			"name_city": "El Molino (La Guajira)"
		},
		{
			"id": 414,
			"city_code": "20250",
			"name_city": "El Paso (Cesar)"
		},
		{
			"id": 352,
			"city_code": "18256",
			"name_city": "El Paujíl (Caquetá)"
		},
		{
			"id": 733,
			"city_code": "52254",
			"name_city": "El Peñol (Nariño)"
		},
		{
			"id": 164,
			"city_code": "13268",
			"name_city": "El Peñón (Bolívar)"
		},
		{
			"id": 482,
			"city_code": "25258",
			"name_city": "El Peñón (Cundinamarca)"
		},
		{
			"id": 873,
			"city_code": "68250",
			"name_city": "El Peñón (Santander)"
		},
		{
			"id": 666,
			"city_code": "47258",
			"name_city": "El Piñón (Magdalena)"
		},
		{
			"id": 874,
			"city_code": "68255",
			"name_city": "El Playón (Santander)"
		},
		{
			"id": 667,
			"city_code": "47268",
			"name_city": "El Retén (Magdalena)"
		},
		{
			"id": 1111,
			"city_code": "95025",
			"name_city": "El Retorno (Guaviare)"
		},
		{
			"id": 940,
			"city_code": "70233",
			"name_city": "El Roble (Sucre)"
		},
		{
			"id": 483,
			"city_code": "25260",
			"name_city": "El Rosal (Cundinamarca)"
		},
		{
			"id": 734,
			"city_code": "52256",
			"name_city": "El Rosario (Nariño)"
		},
		{
			"id": 104,
			"city_code": "5697",
			"name_city": "El Santuario (Antioquia)"
		},
		{
			"id": 735,
			"city_code": "52258",
			"name_city": "El Tablón De Gómez (Nariño)"
		},
		{
			"id": 372,
			"city_code": "19256",
			"name_city": "El Tambo (Cauca)"
		},
		{
			"id": 736,
			"city_code": "52260",
			"name_city": "El Tambo (Nariño)"
		},
		{
			"id": 793,
			"city_code": "54250",
			"name_city": "El Tarra (Norte de Santander)"
		},
		{
			"id": 794,
			"city_code": "54261",
			"name_city": "El Zulia (Norte de Santander)"
		},
		{
			"id": 614,
			"city_code": "41244",
			"name_city": "Elías (Huila)"
		},
		{
			"id": 875,
			"city_code": "68264",
			"name_city": "Encino (Santander)"
		},
		{
			"id": 876,
			"city_code": "68266",
			"name_city": "Enciso (Santander)"
		},
		{
			"id": 46,
			"city_code": "5264",
			"name_city": "Entrerríos (Antioquia)"
		},
		{
			"id": 47,
			"city_code": "5266",
			"name_city": "Envigado (Antioquia)"
		},
		{
			"id": 974,
			"city_code": "73268",
			"name_city": "Espinal (Tolima)"
		},
		{
			"id": 484,
			"city_code": "25269",
			"name_city": "Facatativá (Cundinamarca)"
		},
		{
			"id": 975,
			"city_code": "73270",
			"name_city": "Falan (Tolima)"
		},
		{
			"id": 325,
			"city_code": "17272",
			"name_city": "Filadelfia (Caldas)"
		},
		{
			"id": 825,
			"city_code": "63272",
			"name_city": "Filandia (Quindío)"
		},
		{
			"id": 230,
			"city_code": "15272",
			"name_city": "Firavitoba (Boyacá)"
		},
		{
			"id": 976,
			"city_code": "73275",
			"name_city": "Flandes (Tolima)"
		},
		{
			"id": 346,
			"city_code": "18001",
			"name_city": "Florencia (Caquetá)"
		},
		{
			"id": 373,
			"city_code": "19290",
			"name_city": "Florencia (Cauca)"
		},
		{
			"id": 231,
			"city_code": "15276",
			"name_city": "Floresta (Boyacá)"
		},
		{
			"id": 877,
			"city_code": "68271",
			"name_city": "Florián (Santander)"
		},
		{
			"id": 1024,
			"city_code": "76275",
			"name_city": "Florida (Valle del Cauca)"
		},
		{
			"id": 878,
			"city_code": "68276",
			"name_city": "Floridablanca (Santander)"
		},
		{
			"id": 485,
			"city_code": "25279",
			"name_city": "Fómeque (Cundinamarca)"
		},
		{
			"id": 648,
			"city_code": "44279",
			"name_city": "Fonseca (La Guajira)"
		},
		{
			"id": 1051,
			"city_code": "81300",
			"name_city": "Fortul (Arauca)"
		},
		{
			"id": 486,
			"city_code": "25281",
			"name_city": "Fosca (Cundinamarca)"
		},
		{
			"id": 758,
			"city_code": "52520",
			"name_city": "Francisco Pizarro (Nariño)"
		},
		{
			"id": 48,
			"city_code": "5282",
			"name_city": "Fredonia (Antioquia)"
		},
		{
			"id": 977,
			"city_code": "73283",
			"name_city": "Fresno (Tolima)"
		},
		{
			"id": 49,
			"city_code": "5284",
			"name_city": "Frontino (Antioquia)"
		},
		{
			"id": 697,
			"city_code": "50287",
			"name_city": "Fuente De Oro (Meta)"
		},
		{
			"id": 668,
			"city_code": "47288",
			"name_city": "Fundación (Magdalena)"
		},
		{
			"id": 737,
			"city_code": "52287",
			"name_city": "Funes (Nariño)"
		},
		{
			"id": 487,
			"city_code": "25286",
			"name_city": "Funza (Cundinamarca)"
		},
		{
			"id": 488,
			"city_code": "25288",
			"name_city": "Fúquene (Cundinamarca)"
		},
		{
			"id": 489,
			"city_code": "25290",
			"name_city": "Fusagasugá (Cundinamarca)"
		},
		{
			"id": 490,
			"city_code": "25293",
			"name_city": "Gachalá (Cundinamarca)"
		},
		{
			"id": 491,
			"city_code": "25295",
			"name_city": "Gachancipá (Cundinamarca)"
		},
		{
			"id": 232,
			"city_code": "15293",
			"name_city": "Gachantivá (Boyacá)"
		},
		{
			"id": 492,
			"city_code": "25297",
			"name_city": "Gachetá (Cundinamarca)"
		},
		{
			"id": 879,
			"city_code": "68296",
			"name_city": "Galán (Santander)"
		},
		{
			"id": 130,
			"city_code": "8296",
			"name_city": "Galapa (Atlántico)"
		},
		{
			"id": 941,
			"city_code": "70235",
			"name_city": "Galeras (Sucre)"
		},
		{
			"id": 493,
			"city_code": "25299",
			"name_city": "Gama (Cundinamarca)"
		},
		{
			"id": 415,
			"city_code": "20295",
			"name_city": "Gamarra (Cesar)"
		},
		{
			"id": 880,
			"city_code": "68298",
			"name_city": "Gámbita (Santander)"
		},
		{
			"id": 233,
			"city_code": "15296",
			"name_city": "Gámeza (Boyacá)"
		},
		{
			"id": 234,
			"city_code": "15299",
			"name_city": "Garagoa (Boyacá)"
		},
		{
			"id": 615,
			"city_code": "41298",
			"name_city": "Garzón (Huila)"
		},
		{
			"id": 826,
			"city_code": "63302",
			"name_city": "Génova (Quindío)"
		},
		{
			"id": 616,
			"city_code": "41306",
			"name_city": "Gigante (Huila)"
		},
		{
			"id": 1025,
			"city_code": "76306",
			"name_city": "Ginebra (Valle del Cauca)"
		},
		{
			"id": 50,
			"city_code": "5306",
			"name_city": "Giraldo (Antioquia)"
		},
		{
			"id": 494,
			"city_code": "25307",
			"name_city": "Girardot (Cundinamarca)"
		},
		{
			"id": 51,
			"city_code": "5308",
			"name_city": "Girardota (Antioquia)"
		},
		{
			"id": 881,
			"city_code": "68307",
			"name_city": "Girón (Santander)"
		},
		{
			"id": 52,
			"city_code": "5310",
			"name_city": "Gómez Plata (Antioquia)"
		},
		{
			"id": 416,
			"city_code": "20310",
			"name_city": "González (Cesar)"
		},
		{
			"id": 795,
			"city_code": "54313",
			"name_city": "Gramalote (Norte de Santander)"
		},
		{
			"id": 53,
			"city_code": "5313",
			"name_city": "Granada (Antioquia)"
		},
		{
			"id": 495,
			"city_code": "25312",
			"name_city": "Granada (Cundinamarca)"
		},
		{
			"id": 698,
			"city_code": "50313",
			"name_city": "Granada (Meta)"
		},
		{
			"id": 882,
			"city_code": "68318",
			"name_city": "Guaca (Santander)"
		},
		{
			"id": 235,
			"city_code": "15317",
			"name_city": "Guacamayas (Boyacá)"
		},
		{
			"id": 1026,
			"city_code": "76318",
			"name_city": "Guacarí (Valle del Cauca)"
		},
		{
			"id": 374,
			"city_code": "19300",
			"name_city": "Guachené (Cauca)"
		},
		{
			"id": 496,
			"city_code": "25317",
			"name_city": "Guachetá (Cundinamarca)"
		},
		{
			"id": 738,
			"city_code": "52317",
			"name_city": "Guachucal (Nariño)"
		},
		{
			"id": 1013,
			"city_code": "76111",
			"name_city": "Guadalajara De Buga (Valle del Cauca)"
		},
		{
			"id": 54,
			"city_code": "5315",
			"name_city": "Guadalupe (Antioquia)"
		},
		{
			"id": 617,
			"city_code": "41319",
			"name_city": "Guadalupe (Huila)"
		},
		{
			"id": 883,
			"city_code": "68320",
			"name_city": "Guadalupe (Santander)"
		},
		{
			"id": 497,
			"city_code": "25320",
			"name_city": "Guaduas (Cundinamarca)"
		},
		{
			"id": 739,
			"city_code": "52320",
			"name_city": "Guaitarilla (Nariño)"
		},
		{
			"id": 740,
			"city_code": "52323",
			"name_city": "Gualmatán (Nariño)"
		},
		{
			"id": 669,
			"city_code": "47318",
			"name_city": "Guamal (Magdalena)"
		},
		{
			"id": 699,
			"city_code": "50318",
			"name_city": "Guamal (Meta)"
		},
		{
			"id": 978,
			"city_code": "73319",
			"name_city": "Guamo (Tolima)"
		},
		{
			"id": 375,
			"city_code": "19318",
			"name_city": "Guapí (Cauca)"
		},
		{
			"id": 884,
			"city_code": "68322",
			"name_city": "Guapotá (Santander)"
		},
		{
			"id": 942,
			"city_code": "70265",
			"name_city": "Guaranda (Sucre)"
		},
		{
			"id": 55,
			"city_code": "5318",
			"name_city": "Guarne (Antioquia)"
		},
		{
			"id": 498,
			"city_code": "25322",
			"name_city": "Guasca (Cundinamarca)"
		},
		{
			"id": 56,
			"city_code": "5321",
			"name_city": "Guatapé (Antioquia)"
		},
		{
			"id": 499,
			"city_code": "25324",
			"name_city": "Guataquí (Cundinamarca)"
		},
		{
			"id": 500,
			"city_code": "25326",
			"name_city": "Guatavita (Cundinamarca)"
		},
		{
			"id": 236,
			"city_code": "15322",
			"name_city": "Guateque (Boyacá)"
		},
		{
			"id": 837,
			"city_code": "66318",
			"name_city": "Guática (Risaralda)"
		},
		{
			"id": 885,
			"city_code": "68324",
			"name_city": "Guavatá (Santander)"
		},
		{
			"id": 501,
			"city_code": "25328",
			"name_city": "Guayabal De Síquima (Cundinamarca)"
		},
		{
			"id": 502,
			"city_code": "25335",
			"name_city": "Guayabetal (Cundinamarca)"
		},
		{
			"id": 237,
			"city_code": "15325",
			"name_city": "Guayatá (Boyacá)"
		},
		{
			"id": 886,
			"city_code": "68327",
			"name_city": "Güepsa (Santander)"
		},
		{
			"id": 238,
			"city_code": "15332",
			"name_city": "Güicán De La Sierra (Boyacá)"
		},
		{
			"id": 503,
			"city_code": "25339",
			"name_city": "Gutiérrez (Cundinamarca)"
		},
		{
			"id": 796,
			"city_code": "54344",
			"name_city": "Hacarí (Norte de Santander)"
		},
		{
			"id": 165,
			"city_code": "13300",
			"name_city": "Hatillo De Loba (Bolívar)"
		},
		{
			"id": 887,
			"city_code": "68344",
			"name_city": "Hato (Santander)"
		},
		{
			"id": 1058,
			"city_code": "85125",
			"name_city": "Hato Corozal (Casanare)"
		},
		{
			"id": 649,
			"city_code": "44378",
			"name_city": "Hatonuevo (La Guajira)"
		},
		{
			"id": 57,
			"city_code": "5347",
			"name_city": "Heliconia (Antioquia)"
		},
		{
			"id": 797,
			"city_code": "54347",
			"name_city": "Herrán (Norte de Santander)"
		},
		{
			"id": 979,
			"city_code": "73347",
			"name_city": "Herveo (Tolima)"
		},
		{
			"id": 58,
			"city_code": "5353",
			"name_city": "Hispania (Antioquia)"
		},
		{
			"id": 618,
			"city_code": "41349",
			"name_city": "Hobo (Huila)"
		},
		{
			"id": 980,
			"city_code": "73349",
			"name_city": "Honda (Tolima)"
		},
		{
			"id": 959,
			"city_code": "73001",
			"name_city": "Ibagué (Tolima)"
		},
		{
			"id": 981,
			"city_code": "73352",
			"name_city": "Icononzo (Tolima)"
		},
		{
			"id": 741,
			"city_code": "52352",
			"name_city": "Iles (Nariño)"
		},
		{
			"id": 742,
			"city_code": "52354",
			"name_city": "Imués (Nariño)"
		},
		{
			"id": 1100,
			"city_code": "94001",
			"name_city": "Inírida (Guainía)"
		},
		{
			"id": 376,
			"city_code": "19355",
			"name_city": "Inzá (Cauca)"
		},
		{
			"id": 743,
			"city_code": "52356",
			"name_city": "Ipiales (Nariño)"
		},
		{
			"id": 619,
			"city_code": "41357",
			"name_city": "Íquira (Huila)"
		},
		{
			"id": 620,
			"city_code": "41359",
			"name_city": "Isnos (Huila)"
		},
		{
			"id": 589,
			"city_code": "27361",
			"name_city": "Istmina (Chocó)"
		},
		{
			"id": 59,
			"city_code": "5360",
			"name_city": "Itagüí (Antioquia)"
		},
		{
			"id": 60,
			"city_code": "5361",
			"name_city": "Ituango (Antioquia)"
		},
		{
			"id": 239,
			"city_code": "15362",
			"name_city": "Iza (Boyacá)"
		},
		{
			"id": 377,
			"city_code": "19364",
			"name_city": "Jambaló (Cauca)"
		},
		{
			"id": 1027,
			"city_code": "76364",
			"name_city": "Jamundí (Valle del Cauca)"
		},
		{
			"id": 61,
			"city_code": "5364",
			"name_city": "Jardín (Antioquia)"
		},
		{
			"id": 240,
			"city_code": "15367",
			"name_city": "Jenesano (Boyacá)"
		},
		{
			"id": 62,
			"city_code": "5368",
			"name_city": "Jericó (Antioquia)"
		},
		{
			"id": 241,
			"city_code": "15368",
			"name_city": "Jericó (Boyacá)"
		},
		{
			"id": 504,
			"city_code": "25368",
			"name_city": "Jerusalén (Cundinamarca)"
		},
		{
			"id": 888,
			"city_code": "68368",
			"name_city": "Jesús María (Santander)"
		},
		{
			"id": 889,
			"city_code": "68370",
			"name_city": "Jordán (Santander)"
		},
		{
			"id": 131,
			"city_code": "8372",
			"name_city": "Juan De Acosta (Atlántico)"
		},
		{
			"id": 505,
			"city_code": "25372",
			"name_city": "Junín (Cundinamarca)"
		},
		{
			"id": 590,
			"city_code": "27372",
			"name_city": "Juradó (Chocó)"
		},
		{
			"id": 438,
			"city_code": "23350",
			"name_city": "La Apartada (Córdoba)"
		},
		{
			"id": 621,
			"city_code": "41378",
			"name_city": "La Argentina (Huila)"
		},
		{
			"id": 890,
			"city_code": "68377",
			"name_city": "La Belleza (Santander)"
		},
		{
			"id": 506,
			"city_code": "25377",
			"name_city": "La Calera (Cundinamarca)"
		},
		{
			"id": 243,
			"city_code": "15380",
			"name_city": "La Capilla (Boyacá)"
		},
		{
			"id": 63,
			"city_code": "5376",
			"name_city": "La Ceja (Antioquia)"
		},
		{
			"id": 838,
			"city_code": "66383",
			"name_city": "La Celia (Risaralda)"
		},
		{
			"id": 1091,
			"city_code": "91405",
			"name_city": "La Chorrera (Amazonas)"
		},
		{
			"id": 744,
			"city_code": "52378",
			"name_city": "La Cruz (Nariño)"
		},
		{
			"id": 1028,
			"city_code": "76377",
			"name_city": "La Cumbre (Valle del Cauca)"
		},
		{
			"id": 326,
			"city_code": "17380",
			"name_city": "La Dorada (Caldas)"
		},
		{
			"id": 799,
			"city_code": "54385",
			"name_city": "La Esperanza (Norte de Santander)"
		},
		{
			"id": 64,
			"city_code": "5380",
			"name_city": "La Estrella (Antioquia)"
		},
		{
			"id": 745,
			"city_code": "52381",
			"name_city": "La Florida (Nariño)"
		},
		{
			"id": 417,
			"city_code": "20383",
			"name_city": "La Gloria (Cesar)"
		},
		{
			"id": 1105,
			"city_code": "94885",
			"name_city": "La Guadalupe (Guainía)"
		},
		{
			"id": 418,
			"city_code": "20400",
			"name_city": "La Jagua De Ibirico (Cesar)"
		},
		{
			"id": 650,
			"city_code": "44420",
			"name_city": "La Jagua Del Pilar (La Guajira)"
		},
		{
			"id": 746,
			"city_code": "52385",
			"name_city": "La Llanada (Nariño)"
		},
		{
			"id": 702,
			"city_code": "50350",
			"name_city": "La Macarena (Meta)"
		},
		{
			"id": 327,
			"city_code": "17388",
			"name_city": "La Merced (Caldas)"
		},
		{
			"id": 507,
			"city_code": "25386",
			"name_city": "La Mesa (Cundinamarca)"
		},
		{
			"id": 353,
			"city_code": "18410",
			"name_city": "La Montañita (Caquetá)"
		},
		{
			"id": 508,
			"city_code": "25394",
			"name_city": "La Palma (Cundinamarca)"
		},
		{
			"id": 424,
			"city_code": "20621",
			"name_city": "La Paz (Cesar)"
		},
		{
			"id": 892,
			"city_code": "68397",
			"name_city": "La Paz (Santander)"
		},
		{
			"id": 1092,
			"city_code": "91407",
			"name_city": "La Pedrera (Amazonas)"
		},
		{
			"id": 509,
			"city_code": "25398",
			"name_city": "La Peña (Cundinamarca)"
		},
		{
			"id": 65,
			"city_code": "5390",
			"name_city": "La Pintada (Antioquia)"
		},
		{
			"id": 622,
			"city_code": "41396",
			"name_city": "La Plata (Huila)"
		},
		{
			"id": 800,
			"city_code": "54398",
			"name_city": "La Playa (Norte de Santander)"
		},
		{
			"id": 1120,
			"city_code": "99524",
			"name_city": "La Primavera (Vichada)"
		},
		{
			"id": 1059,
			"city_code": "85136",
			"name_city": "La Salina (Casanare)"
		},
		{
			"id": 378,
			"city_code": "19392",
			"name_city": "La Sierra (Cauca)"
		},
		{
			"id": 827,
			"city_code": "63401",
			"name_city": "La Tebaida (Quindío)"
		},
		{
			"id": 747,
			"city_code": "52390",
			"name_city": "La Tola (Nariño)"
		},
		{
			"id": 66,
			"city_code": "5400",
			"name_city": "La Unión (Antioquia)"
		},
		{
			"id": 748,
			"city_code": "52399",
			"name_city": "La Unión (Nariño)"
		},
		{
			"id": 943,
			"city_code": "70400",
			"name_city": "La Unión (Sucre)"
		},
		{
			"id": 1029,
			"city_code": "76400",
			"name_city": "La Unión (Valle del Cauca)"
		},
		{
			"id": 245,
			"city_code": "15403",
			"name_city": "La Uvita (Boyacá)"
		},
		{
			"id": 379,
			"city_code": "19397",
			"name_city": "La Vega (Cauca)"
		},
		{
			"id": 510,
			"city_code": "25402",
			"name_city": "La Vega (Cundinamarca)"
		},
		{
			"id": 1093,
			"city_code": "91430",
			"name_city": "La Victoria (Amazonas)"
		},
		{
			"id": 244,
			"city_code": "15401",
			"name_city": "La Victoria (Boyacá)"
		},
		{
			"id": 1030,
			"city_code": "76403",
			"name_city": "La Victoria (Valle del Cauca)"
		},
		{
			"id": 839,
			"city_code": "66400",
			"name_city": "La Virginia (Risaralda)"
		},
		{
			"id": 798,
			"city_code": "54377",
			"name_city": "Labateca (Norte de Santander)"
		},
		{
			"id": 242,
			"city_code": "15377",
			"name_city": "Labranzagrande (Boyacá)"
		},
		{
			"id": 891,
			"city_code": "68385",
			"name_city": "Landázuri (Santander)"
		},
		{
			"id": 893,
			"city_code": "68406",
			"name_city": "Lebrija (Santander)"
		},
		{
			"id": 749,
			"city_code": "52405",
			"name_city": "Leiva (Nariño)"
		},
		{
			"id": 704,
			"city_code": "50400",
			"name_city": "Lejanías (Meta)"
		},
		{
			"id": 511,
			"city_code": "25407",
			"name_city": "Lenguazaque (Cundinamarca)"
		},
		{
			"id": 982,
			"city_code": "73408",
			"name_city": "Lérida (Tolima)"
		},
		{
			"id": 1089,
			"city_code": "91001",
			"name_city": "Leticia (Amazonas)"
		},
		{
			"id": 983,
			"city_code": "73411",
			"name_city": "Líbano (Tolima)"
		},
		{
			"id": 67,
			"city_code": "5411",
			"name_city": "Liborina (Antioquia)"
		},
		{
			"id": 750,
			"city_code": "52411",
			"name_city": "Linares (Nariño)"
		},
		{
			"id": 591,
			"city_code": "27413",
			"name_city": "Lloró (Chocó)"
		},
		{
			"id": 380,
			"city_code": "19418",
			"name_city": "López De Micay (Cauca)"
		},
		{
			"id": 439,
			"city_code": "23417",
			"name_city": "Lorica (Córdoba)"
		},
		{
			"id": 751,
			"city_code": "52418",
			"name_city": "Los Andes (Nariño)"
		},
		{
			"id": 440,
			"city_code": "23419",
			"name_city": "Los Córdobas (Córdoba)"
		},
		{
			"id": 944,
			"city_code": "70418",
			"name_city": "Los Palmitos (Sucre)"
		},
		{
			"id": 801,
			"city_code": "54405",
			"name_city": "Los Patios (Norte de Santander)"
		},
		{
			"id": 894,
			"city_code": "68418",
			"name_city": "Los Santos (Santander)"
		},
		{
			"id": 802,
			"city_code": "54418",
			"name_city": "Lourdes (Norte de Santander)"
		},
		{
			"id": 132,
			"city_code": "8421",
			"name_city": "Luruaco (Atlántico)"
		},
		{
			"id": 247,
			"city_code": "15425",
			"name_city": "Macanal (Boyacá)"
		},
		{
			"id": 895,
			"city_code": "68425",
			"name_city": "Macaravita (Santander)"
		},
		{
			"id": 68,
			"city_code": "5425",
			"name_city": "Maceo (Antioquia)"
		},
		{
			"id": 512,
			"city_code": "25426",
			"name_city": "Machetá (Cundinamarca)"
		},
		{
			"id": 513,
			"city_code": "25430",
			"name_city": "Madrid (Cundinamarca)"
		},
		{
			"id": 166,
			"city_code": "13430",
			"name_city": "Magangué (Bolívar)"
		},
		{
			"id": 752,
			"city_code": "52427",
			"name_city": "Magüí (Nariño)"
		},
		{
			"id": 167,
			"city_code": "13433",
			"name_city": "Mahates (Bolívar)"
		},
		{
			"id": 651,
			"city_code": "44430",
			"name_city": "Maicao (La Guajira)"
		},
		{
			"id": 945,
			"city_code": "70429",
			"name_city": "Majagual (Sucre)"
		},
		{
			"id": 896,
			"city_code": "68432",
			"name_city": "Málaga (Santander)"
		},
		{
			"id": 133,
			"city_code": "8433",
			"name_city": "Malambo (Atlántico)"
		},
		{
			"id": 753,
			"city_code": "52435",
			"name_city": "Mallama (Nariño)"
		},
		{
			"id": 134,
			"city_code": "8436",
			"name_city": "Manatí (Atlántico)"
		},
		{
			"id": 652,
			"city_code": "44560",
			"name_city": "Manaure (La Guajira)"
		},
		{
			"id": 419,
			"city_code": "20443",
			"name_city": "Manaure Balcón Del Cesar (Cesar)"
		},
		{
			"id": 1060,
			"city_code": "85139",
			"name_city": "Maní (Casanare)"
		},
		{
			"id": 319,
			"city_code": "17001",
			"name_city": "Manizales (Caldas)"
		},
		{
			"id": 514,
			"city_code": "25436",
			"name_city": "Manta (Cundinamarca)"
		},
		{
			"id": 328,
			"city_code": "17433",
			"name_city": "Manzanares (Caldas)"
		},
		{
			"id": 700,
			"city_code": "50325",
			"name_city": "Mapiripán (Meta)"
		},
		{
			"id": 1102,
			"city_code": "94663",
			"name_city": "Mapiripana (Guainía)"
		},
		{
			"id": 168,
			"city_code": "13440",
			"name_city": "Margarita (Bolívar)"
		},
		{
			"id": 169,
			"city_code": "13442",
			"name_city": "María La Baja (Bolívar)"
		},
		{
			"id": 69,
			"city_code": "5440",
			"name_city": "Marinilla (Antioquia)"
		},
		{
			"id": 248,
			"city_code": "15442",
			"name_city": "Maripí (Boyacá)"
		},
		{
			"id": 329,
			"city_code": "17442",
			"name_city": "Marmato (Caldas)"
		},
		{
			"id": 330,
			"city_code": "17444",
			"name_city": "Marquetalia (Caldas)"
		},
		{
			"id": 840,
			"city_code": "66440",
			"name_city": "Marsella (Risaralda)"
		},
		{
			"id": 331,
			"city_code": "17446",
			"name_city": "Marulanda (Caldas)"
		},
		{
			"id": 897,
			"city_code": "68444",
			"name_city": "Matanza (Santander)"
		},
		{
			"id": 1,
			"city_code": "5001",
			"name_city": "Medellín (Antioquia)"
		},
		{
			"id": 515,
			"city_code": "25438",
			"name_city": "Medina (Cundinamarca)"
		},
		{
			"id": 592,
			"city_code": "27425",
			"name_city": "Medio Atrato (Chocó)"
		},
		{
			"id": 593,
			"city_code": "27430",
			"name_city": "Medio Baudó (Chocó)"
		},
		{
			"id": 594,
			"city_code": "27450",
			"name_city": "Medio San Juan (Chocó)"
		},
		{
			"id": 985,
			"city_code": "73449",
			"name_city": "Melgar (Tolima)"
		},
		{
			"id": 381,
			"city_code": "19450",
			"name_city": "Mercaderes (Cauca)"
		},
		{
			"id": 701,
			"city_code": "50330",
			"name_city": "Mesetas (Meta)"
		},
		{
			"id": 354,
			"city_code": "18460",
			"name_city": "Milán (Caquetá)"
		},
		{
			"id": 249,
			"city_code": "15455",
			"name_city": "Miraflores (Boyacá)"
		},
		{
			"id": 1112,
			"city_code": "95200",
			"name_city": "Miraflores (Guaviare)"
		},
		{
			"id": 382,
			"city_code": "19455",
			"name_city": "Miranda (Cauca)"
		},
		{
			"id": 1094,
			"city_code": "91460",
			"name_city": "Mirití - Paraná (Amazonas)"
		},
		{
			"id": 841,
			"city_code": "66456",
			"name_city": "Mistrató (Risaralda)"
		},
		{
			"id": 1113,
			"city_code": "97001",
			"name_city": "Mitú (Vaupés)"
		},
		{
			"id": 1074,
			"city_code": "86001",
			"name_city": "Mocoa (Putumayo)"
		},
		{
			"id": 898,
			"city_code": "68464",
			"name_city": "Mogotes (Santander)"
		},
		{
			"id": 899,
			"city_code": "68468",
			"name_city": "Molagavita (Santander)"
		},
		{
			"id": 441,
			"city_code": "23464",
			"name_city": "Momil (Córdoba)"
		},
		{
			"id": 171,
			"city_code": "13468",
			"name_city": "Mompós (Bolívar)"
		},
		{
			"id": 250,
			"city_code": "15464",
			"name_city": "Mongua (Boyacá)"
		},
		{
			"id": 251,
			"city_code": "15466",
			"name_city": "Monguí (Boyacá)"
		},
		{
			"id": 252,
			"city_code": "15469",
			"name_city": "Moniquirá (Boyacá)"
		},
		{
			"id": 443,
			"city_code": "23500",
			"name_city": "Moñitos (Córdoba)"
		},
		{
			"id": 70,
			"city_code": "5467",
			"name_city": "Montebello (Antioquia)"
		},
		{
			"id": 170,
			"city_code": "13458",
			"name_city": "Montecristo (Bolívar)"
		},
		{
			"id": 442,
			"city_code": "23466",
			"name_city": "Montelíbano (Córdoba)"
		},
		{
			"id": 828,
			"city_code": "63470",
			"name_city": "Montenegro (Quindío)"
		},
		{
			"id": 429,
			"city_code": "23001",
			"name_city": "Montería (Córdoba)"
		},
		{
			"id": 1061,
			"city_code": "85162",
			"name_city": "Monterrey (Casanare)"
		},
		{
			"id": 172,
			"city_code": "13473",
			"name_city": "Morales (Bolívar)"
		},
		{
			"id": 383,
			"city_code": "19473",
			"name_city": "Morales (Cauca)"
		},
		{
			"id": 355,
			"city_code": "18479",
			"name_city": "Morelia (Caquetá)"
		},
		{
			"id": 1108,
			"city_code": "94888",
			"name_city": "Morichal (Guainía)"
		},
		{
			"id": 946,
			"city_code": "70473",
			"name_city": "Morroa (Sucre)"
		},
		{
			"id": 516,
			"city_code": "25473",
			"name_city": "Mosquera (Cundinamarca)"
		},
		{
			"id": 754,
			"city_code": "52473",
			"name_city": "Mosquera (Nariño)"
		},
		{
			"id": 253,
			"city_code": "15476",
			"name_city": "Motavita (Boyacá)"
		},
		{
			"id": 986,
			"city_code": "73461",
			"name_city": "Murillo (Tolima)"
		},
		{
			"id": 71,
			"city_code": "5475",
			"name_city": "Murindó (Antioquia)"
		},
		{
			"id": 72,
			"city_code": "5480",
			"name_city": "Mutatá (Antioquia)"
		},
		{
			"id": 803,
			"city_code": "54480",
			"name_city": "Mutiscua (Norte de Santander)"
		},
		{
			"id": 254,
			"city_code": "15480",
			"name_city": "Muzo (Boyacá)"
		},
		{
			"id": 73,
			"city_code": "5483",
			"name_city": "Nariño (Antioquia)"
		},
		{
			"id": 517,
			"city_code": "25483",
			"name_city": "Nariño (Cundinamarca)"
		},
		{
			"id": 755,
			"city_code": "52480",
			"name_city": "Nariño (Nariño)"
		},
		{
			"id": 623,
			"city_code": "41483",
			"name_city": "Nátaga (Huila)"
		},
		{
			"id": 987,
			"city_code": "73483",
			"name_city": "Natagaima (Tolima)"
		},
		{
			"id": 75,
			"city_code": "5495",
			"name_city": "Nechí (Antioquia)"
		},
		{
			"id": 74,
			"city_code": "5490",
			"name_city": "Necoclí (Antioquia)"
		},
		{
			"id": 332,
			"city_code": "17486",
			"name_city": "Neira (Caldas)"
		},
		{
			"id": 605,
			"city_code": "41001",
			"name_city": "Neiva (Huila)"
		},
		{
			"id": 518,
			"city_code": "25486",
			"name_city": "Nemocón (Cundinamarca)"
		},
		{
			"id": 519,
			"city_code": "25488",
			"name_city": "Nilo (Cundinamarca)"
		},
		{
			"id": 520,
			"city_code": "25489",
			"name_city": "Nimaima (Cundinamarca)"
		},
		{
			"id": 255,
			"city_code": "15491",
			"name_city": "Nobsa (Boyacá)"
		},
		{
			"id": 521,
			"city_code": "25491",
			"name_city": "Nocaima (Cundinamarca)"
		},
		{
			"id": 333,
			"city_code": "17495",
			"name_city": "Norcasia (Caldas)"
		},
		{
			"id": 173,
			"city_code": "13490",
			"name_city": "Norosí (Bolívar)"
		},
		{
			"id": 595,
			"city_code": "27491",
			"name_city": "Nóvita (Chocó)"
		},
		{
			"id": 670,
			"city_code": "47460",
			"name_city": "Nueva Granada (Magdalena)"
		},
		{
			"id": 256,
			"city_code": "15494",
			"name_city": "Nuevo Colón (Boyacá)"
		},
		{
			"id": 1062,
			"city_code": "85225",
			"name_city": "Nunchía (Casanare)"
		},
		{
			"id": 596,
			"city_code": "27495",
			"name_city": "Nuquí (Chocó)"
		},
		{
			"id": 1031,
			"city_code": "76497",
			"name_city": "Obando (Valle del Cauca)"
		},
		{
			"id": 900,
			"city_code": "68498",
			"name_city": "Ocamonte (Santander)"
		},
		{
			"id": 804,
			"city_code": "54498",
			"name_city": "Ocaña (Norte de Santander)"
		},
		{
			"id": 901,
			"city_code": "68500",
			"name_city": "Oiba (Santander)"
		},
		{
			"id": 257,
			"city_code": "15500",
			"name_city": "Oicatá (Boyacá)"
		},
		{
			"id": 76,
			"city_code": "5501",
			"name_city": "Olaya (Antioquia)"
		},
		{
			"id": 756,
			"city_code": "52490",
			"name_city": "Olaya Herrera (Nariño)"
		},
		{
			"id": 902,
			"city_code": "68502",
			"name_city": "Onzaga (Santander)"
		},
		{
			"id": 624,
			"city_code": "41503",
			"name_city": "Oporapa (Huila)"
		},
		{
			"id": 1076,
			"city_code": "86320",
			"name_city": "Orito (Putumayo)"
		},
		{
			"id": 1063,
			"city_code": "85230",
			"name_city": "Orocué (Casanare)"
		},
		{
			"id": 988,
			"city_code": "73504",
			"name_city": "Ortega (Tolima)"
		},
		{
			"id": 757,
			"city_code": "52506",
			"name_city": "Ospina (Nariño)"
		},
		{
			"id": 258,
			"city_code": "15507",
			"name_city": "Otanche (Boyacá)"
		},
		{
			"id": 947,
			"city_code": "70508",
			"name_city": "Ovejas (Sucre)"
		},
		{
			"id": 259,
			"city_code": "15511",
			"name_city": "Pachavita (Boyacá)"
		},
		{
			"id": 523,
			"city_code": "25513",
			"name_city": "Pacho (Cundinamarca)"
		},
		{
			"id": 1115,
			"city_code": "97511",
			"name_city": "Pacoa (Vaupés)"
		},
		{
			"id": 334,
			"city_code": "17513",
			"name_city": "Pácora (Caldas)"
		},
		{
			"id": 384,
			"city_code": "19513",
			"name_city": "Padilla (Cauca)"
		},
		{
			"id": 260,
			"city_code": "15514",
			"name_city": "Páez (Boyacá)"
		},
		{
			"id": 385,
			"city_code": "19517",
			"name_city": "Páez (Cauca)"
		},
		{
			"id": 625,
			"city_code": "41518",
			"name_city": "Paicol (Huila)"
		},
		{
			"id": 420,
			"city_code": "20517",
			"name_city": "Pailitas (Cesar)"
		},
		{
			"id": 524,
			"city_code": "25518",
			"name_city": "Paime (Cundinamarca)"
		},
		{
			"id": 261,
			"city_code": "15516",
			"name_city": "Paipa (Boyacá)"
		},
		{
			"id": 262,
			"city_code": "15518",
			"name_city": "Pajarito (Boyacá)"
		},
		{
			"id": 626,
			"city_code": "41524",
			"name_city": "Palermo (Huila)"
		},
		{
			"id": 335,
			"city_code": "17524",
			"name_city": "Palestina (Caldas)"
		},
		{
			"id": 627,
			"city_code": "41530",
			"name_city": "Palestina (Huila)"
		},
		{
			"id": 903,
			"city_code": "68522",
			"name_city": "Palmar (Santander)"
		},
		{
			"id": 135,
			"city_code": "8520",
			"name_city": "Palmar De Varela (Atlántico)"
		},
		{
			"id": 904,
			"city_code": "68524",
			"name_city": "Palmas Del Socorro (Santander)"
		},
		{
			"id": 1032,
			"city_code": "76520",
			"name_city": "Palmira (Valle del Cauca)"
		},
		{
			"id": 948,
			"city_code": "70523",
			"name_city": "Palmito (Sucre)"
		},
		{
			"id": 989,
			"city_code": "73520",
			"name_city": "Palocabildo (Tolima)"
		},
		{
			"id": 805,
			"city_code": "54518",
			"name_city": "Pamplona (Norte de Santander)"
		},
		{
			"id": 806,
			"city_code": "54520",
			"name_city": "Pamplonita (Norte de Santander)"
		},
		{
			"id": 1107,
			"city_code": "94887",
			"name_city": "Pana Pana (Guainía)"
		},
		{
			"id": 525,
			"city_code": "25524",
			"name_city": "Pandi (Cundinamarca)"
		},
		{
			"id": 263,
			"city_code": "15522",
			"name_city": "Panqueba (Boyacá)"
		},
		{
			"id": 1117,
			"city_code": "97777",
			"name_city": "Papunahua (Vaupés)"
		},
		{
			"id": 905,
			"city_code": "68533",
			"name_city": "Páramo (Santander)"
		},
		{
			"id": 526,
			"city_code": "25530",
			"name_city": "Paratebueno (Cundinamarca)"
		},
		{
			"id": 527,
			"city_code": "25535",
			"name_city": "Pasca (Cundinamarca)"
		},
		{
			"id": 716,
			"city_code": "52001",
			"name_city": "Pasto (Nariño)"
		},
		{
			"id": 386,
			"city_code": "19532",
			"name_city": "Patía (Cauca)"
		},
		{
			"id": 264,
			"city_code": "15531",
			"name_city": "Pauna (Boyacá)"
		},
		{
			"id": 265,
			"city_code": "15533",
			"name_city": "Paya (Boyacá)"
		},
		{
			"id": 1064,
			"city_code": "85250",
			"name_city": "Paz De Ariporo (Casanare)"
		},
		{
			"id": 266,
			"city_code": "15537",
			"name_city": "Paz De Río (Boyacá)"
		},
		{
			"id": 671,
			"city_code": "47541",
			"name_city": "Pedraza (Magdalena)"
		},
		{
			"id": 421,
			"city_code": "20550",
			"name_city": "Pelaya (Cesar)"
		},
		{
			"id": 77,
			"city_code": "5541",
			"name_city": "Peñol (Antioquia)"
		},
		{
			"id": 336,
			"city_code": "17541",
			"name_city": "Pensilvania (Caldas)"
		},
		{
			"id": 78,
			"city_code": "5543",
			"name_city": "Peque (Antioquia)"
		},
		{
			"id": 832,
			"city_code": "66001",
			"name_city": "Pereira (Risaralda)"
		},
		{
			"id": 267,
			"city_code": "15542",
			"name_city": "Pesca (Boyacá)"
		},
		{
			"id": 387,
			"city_code": "19533",
			"name_city": "Piamonte (Cauca)"
		},
		{
			"id": 906,
			"city_code": "68547",
			"name_city": "Piedecuesta (Santander)"
		},
		{
			"id": 990,
			"city_code": "73547",
			"name_city": "Piedras (Tolima)"
		},
		{
			"id": 388,
			"city_code": "19548",
			"name_city": "Piendamó - Tunía (Cauca)"
		},
		{
			"id": 829,
			"city_code": "63548",
			"name_city": "Pijao (Quindío)"
		},
		{
			"id": 672,
			"city_code": "47545",
			"name_city": "Pijiño Del Carmen (Magdalena)"
		},
		{
			"id": 907,
			"city_code": "68549",
			"name_city": "Pinchote (Santander)"
		},
		{
			"id": 174,
			"city_code": "13549",
			"name_city": "Pinillos (Bolívar)"
		},
		{
			"id": 136,
			"city_code": "8549",
			"name_city": "Piojó (Atlántico)"
		},
		{
			"id": 268,
			"city_code": "15550",
			"name_city": "Pisba (Boyacá)"
		},
		{
			"id": 628,
			"city_code": "41548",
			"name_city": "Pital (Huila)"
		},
		{
			"id": 629,
			"city_code": "41551",
			"name_city": "Pitalito (Huila)"
		},
		{
			"id": 673,
			"city_code": "47551",
			"name_city": "Pivijay (Magdalena)"
		},
		{
			"id": 991,
			"city_code": "73555",
			"name_city": "Planadas (Tolima)"
		},
		{
			"id": 444,
			"city_code": "23555",
			"name_city": "Planeta Rica (Córdoba)"
		},
		{
			"id": 674,
			"city_code": "47555",
			"name_city": "Plato (Magdalena)"
		},
		{
			"id": 759,
			"city_code": "52540",
			"name_city": "Policarpa (Nariño)"
		},
		{
			"id": 137,
			"city_code": "8558",
			"name_city": "Polonuevo (Atlántico)"
		},
		{
			"id": 138,
			"city_code": "8560",
			"name_city": "Ponedera (Atlántico)"
		},
		{
			"id": 362,
			"city_code": "19001",
			"name_city": "Popayán (Cauca)"
		},
		{
			"id": 1065,
			"city_code": "85263",
			"name_city": "Pore (Casanare)"
		},
		{
			"id": 760,
			"city_code": "52560",
			"name_city": "Potosí (Nariño)"
		},
		{
			"id": 1033,
			"city_code": "76563",
			"name_city": "Pradera (Valle del Cauca)"
		},
		{
			"id": 992,
			"city_code": "73563",
			"name_city": "Prado (Tolima)"
		},
		{
			"id": 761,
			"city_code": "52565",
			"name_city": "Providencia (Nariño)"
		},
		{
			"id": 1088,
			"city_code": "88564",
			"name_city": "Providencia (San Andrés y Providencia)"
		},
		{
			"id": 422,
			"city_code": "20570",
			"name_city": "Pueblo Bello (Cesar)"
		},
		{
			"id": 445,
			"city_code": "23570",
			"name_city": "Pueblo Nuevo (Córdoba)"
		},
		{
			"id": 842,
			"city_code": "66572",
			"name_city": "Pueblo Rico (Risaralda)"
		},
		{
			"id": 79,
			"city_code": "5576",
			"name_city": "Pueblorrico (Antioquia)"
		},
		{
			"id": 675,
			"city_code": "47570",
			"name_city": "Puebloviejo (Magdalena)"
		},
		{
			"id": 908,
			"city_code": "68572",
			"name_city": "Puente Nacional (Santander)"
		},
		{
			"id": 762,
			"city_code": "52573",
			"name_city": "Puerres (Nariño)"
		},
		{
			"id": 1095,
			"city_code": "91530",
			"name_city": "Puerto Alegría (Amazonas)"
		},
		{
			"id": 1096,
			"city_code": "91536",
			"name_city": "Puerto Arica (Amazonas)"
		},
		{
			"id": 1077,
			"city_code": "86568",
			"name_city": "Puerto Asís (Putumayo)"
		},
		{
			"id": 80,
			"city_code": "5579",
			"name_city": "Puerto Berrío (Antioquia)"
		},
		{
			"id": 269,
			"city_code": "15572",
			"name_city": "Puerto Boyacá (Boyacá)"
		},
		{
			"id": 1078,
			"city_code": "86569",
			"name_city": "Puerto Caicedo (Putumayo)"
		},
		{
			"id": 1119,
			"city_code": "99001",
			"name_city": "Puerto Carreño (Vichada)"
		},
		{
			"id": 139,
			"city_code": "8573",
			"name_city": "Puerto Colombia (Atlántico)"
		},
		{
			"id": 1104,
			"city_code": "94884",
			"name_city": "Puerto Colombia (Guainía)"
		},
		{
			"id": 705,
			"city_code": "50450",
			"name_city": "Puerto Concordia (Meta)"
		},
		{
			"id": 446,
			"city_code": "23574",
			"name_city": "Puerto Escondido (Córdoba)"
		},
		{
			"id": 706,
			"city_code": "50568",
			"name_city": "Puerto Gaitán (Meta)"
		},
		{
			"id": 1079,
			"city_code": "86571",
			"name_city": "Puerto Guzmán (Putumayo)"
		},
		{
			"id": 1080,
			"city_code": "86573",
			"name_city": "Puerto Leguízamo (Putumayo)"
		},
		{
			"id": 447,
			"city_code": "23580",
			"name_city": "Puerto Libertador (Córdoba)"
		},
		{
			"id": 708,
			"city_code": "50577",
			"name_city": "Puerto Lleras (Meta)"
		},
		{
			"id": 707,
			"city_code": "50573",
			"name_city": "Puerto López (Meta)"
		},
		{
			"id": 81,
			"city_code": "5585",
			"name_city": "Puerto Nare (Antioquia)"
		},
		{
			"id": 1097,
			"city_code": "91540",
			"name_city": "Puerto Nariño (Amazonas)"
		},
		{
			"id": 909,
			"city_code": "68573",
			"name_city": "Puerto Parra (Santander)"
		},
		{
			"id": 356,
			"city_code": "18592",
			"name_city": "Puerto Rico (Caquetá)"
		},
		{
			"id": 709,
			"city_code": "50590",
			"name_city": "Puerto Rico (Meta)"
		},
		{
			"id": 1052,
			"city_code": "81591",
			"name_city": "Puerto Rondón (Arauca)"
		},
		{
			"id": 528,
			"city_code": "25572",
			"name_city": "Puerto Salgar (Cundinamarca)"
		},
		{
			"id": 1098,
			"city_code": "91669",
			"name_city": "Puerto Santander (Amazonas)"
		},
		{
			"id": 807,
			"city_code": "54553",
			"name_city": "Puerto Santander (Norte de Santander)"
		},
		{
			"id": 389,
			"city_code": "19573",
			"name_city": "Puerto Tejada (Cauca)"
		},
		{
			"id": 82,
			"city_code": "5591",
			"name_city": "Puerto Triunfo (Antioquia)"
		},
		{
			"id": 910,
			"city_code": "68575",
			"name_city": "Puerto Wilches (Santander)"
		},
		{
			"id": 529,
			"city_code": "25580",
			"name_city": "Pulí (Cundinamarca)"
		},
		{
			"id": 763,
			"city_code": "52585",
			"name_city": "Pupiales (Nariño)"
		},
		{
			"id": 390,
			"city_code": "19585",
			"name_city": "Puracé (Cauca)"
		},
		{
			"id": 993,
			"city_code": "73585",
			"name_city": "Purificación (Tolima)"
		},
		{
			"id": 448,
			"city_code": "23586",
			"name_city": "Purísima De La Concepción (Córdoba)"
		},
		{
			"id": 530,
			"city_code": "25592",
			"name_city": "Quebradanegra (Cundinamarca)"
		},
		{
			"id": 531,
			"city_code": "25594",
			"name_city": "Quetame (Cundinamarca)"
		},
		{
			"id": 575,
			"city_code": "27001",
			"name_city": "Quibdó (Chocó)"
		},
		{
			"id": 830,
			"city_code": "63594",
			"name_city": "Quimbaya (Quindío)"
		},
		{
			"id": 843,
			"city_code": "66594",
			"name_city": "Quinchía (Risaralda)"
		},
		{
			"id": 270,
			"city_code": "15580",
			"name_city": "Quípama (Boyacá)"
		},
		{
			"id": 532,
			"city_code": "25596",
			"name_city": "Quipile (Cundinamarca)"
		},
		{
			"id": 808,
			"city_code": "54599",
			"name_city": "Ragonvalia (Norte de Santander)"
		},
		{
			"id": 271,
			"city_code": "15599",
			"name_city": "Ramiriquí (Boyacá)"
		},
		{
			"id": 272,
			"city_code": "15600",
			"name_city": "Ráquira (Boyacá)"
		},
		{
			"id": 1066,
			"city_code": "85279",
			"name_city": "Recetor (Casanare)"
		},
		{
			"id": 175,
			"city_code": "13580",
			"name_city": "Regidor (Bolívar)"
		},
		{
			"id": 83,
			"city_code": "5604",
			"name_city": "Remedios (Antioquia)"
		},
		{
			"id": 676,
			"city_code": "47605",
			"name_city": "Remolino (Magdalena)"
		},
		{
			"id": 140,
			"city_code": "8606",
			"name_city": "Repelón (Atlántico)"
		},
		{
			"id": 710,
			"city_code": "50606",
			"name_city": "Restrepo (Meta)"
		},
		{
			"id": 1034,
			"city_code": "76606",
			"name_city": "Restrepo (Valle del Cauca)"
		},
		{
			"id": 84,
			"city_code": "5607",
			"name_city": "Retiro (Antioquia)"
		},
		{
			"id": 534,
			"city_code": "25612",
			"name_city": "Ricaurte (Cundinamarca)"
		},
		{
			"id": 764,
			"city_code": "52612",
			"name_city": "Ricaurte (Nariño)"
		},
		{
			"id": 423,
			"city_code": "20614",
			"name_city": "Río De Oro (Cesar)"
		},
		{
			"id": 597,
			"city_code": "27580",
			"name_city": "Río Iró (Chocó)"
		},
		{
			"id": 598,
			"city_code": "27600",
			"name_city": "Río Quito (Chocó)"
		},
		{
			"id": 176,
			"city_code": "13600",
			"name_city": "Río Viejo (Bolívar)"
		},
		{
			"id": 994,
			"city_code": "73616",
			"name_city": "Rioblanco (Tolima)"
		},
		{
			"id": 1035,
			"city_code": "76616",
			"name_city": "Riofrío (Valle del Cauca)"
		},
		{
			"id": 642,
			"city_code": "44001",
			"name_city": "Riohacha (La Guajira)"
		},
		{
			"id": 85,
			"city_code": "5615",
			"name_city": "Rionegro (Antioquia)"
		},
		{
			"id": 911,
			"city_code": "68615",
			"name_city": "Rionegro (Santander)"
		},
		{
			"id": 337,
			"city_code": "17614",
			"name_city": "Riosucio (Caldas)"
		},
		{
			"id": 599,
			"city_code": "27615",
			"name_city": "Riosucio (Chocó)"
		},
		{
			"id": 338,
			"city_code": "17616",
			"name_city": "Risaralda (Caldas)"
		},
		{
			"id": 630,
			"city_code": "41615",
			"name_city": "Rivera (Huila)"
		},
		{
			"id": 765,
			"city_code": "52621",
			"name_city": "Roberto Payán (Nariño)"
		},
		{
			"id": 1036,
			"city_code": "76622",
			"name_city": "Roldanillo (Valle del Cauca)"
		},
		{
			"id": 995,
			"city_code": "73622",
			"name_city": "Roncesvalles (Tolima)"
		},
		{
			"id": 273,
			"city_code": "15621",
			"name_city": "Rondón (Boyacá)"
		},
		{
			"id": 391,
			"city_code": "19622",
			"name_city": "Rosas (Cauca)"
		},
		{
			"id": 996,
			"city_code": "73624",
			"name_city": "Rovira (Tolima)"
		},
		{
			"id": 912,
			"city_code": "68655",
			"name_city": "Sabana De Torres (Santander)"
		},
		{
			"id": 141,
			"city_code": "8634",
			"name_city": "Sabanagrande (Atlántico)"
		},
		{
			"id": 86,
			"city_code": "5628",
			"name_city": "Sabanalarga (Antioquia)"
		},
		{
			"id": 142,
			"city_code": "8638",
			"name_city": "Sabanalarga (Atlántico)"
		},
		{
			"id": 1067,
			"city_code": "85300",
			"name_city": "Sabanalarga (Casanare)"
		},
		{
			"id": 677,
			"city_code": "47660",
			"name_city": "Sabanas De San Ángel (Magdalena)"
		},
		{
			"id": 87,
			"city_code": "5631",
			"name_city": "Sabaneta (Antioquia)"
		},
		{
			"id": 274,
			"city_code": "15632",
			"name_city": "Saboyá (Boyacá)"
		},
		{
			"id": 1068,
			"city_code": "85315",
			"name_city": "Sácama (Casanare)"
		},
		{
			"id": 275,
			"city_code": "15638",
			"name_city": "Sáchica (Boyacá)"
		},
		{
			"id": 449,
			"city_code": "23660",
			"name_city": "Sahagún (Córdoba)"
		},
		{
			"id": 631,
			"city_code": "41660",
			"name_city": "Saladoblanco (Huila)"
		},
		{
			"id": 339,
			"city_code": "17653",
			"name_city": "Salamina (Caldas)"
		},
		{
			"id": 678,
			"city_code": "47675",
			"name_city": "Salamina (Magdalena)"
		},
		{
			"id": 809,
			"city_code": "54660",
			"name_city": "Salazar (Norte de Santander)"
		},
		{
			"id": 997,
			"city_code": "73671",
			"name_city": "Saldaña (Tolima)"
		},
		{
			"id": 831,
			"city_code": "63690",
			"name_city": "Salento (Quindío)"
		},
		{
			"id": 88,
			"city_code": "5642",
			"name_city": "Salgar (Antioquia)"
		},
		{
			"id": 276,
			"city_code": "15646",
			"name_city": "Samacá (Boyacá)"
		},
		{
			"id": 340,
			"city_code": "17662",
			"name_city": "Samaná (Caldas)"
		},
		{
			"id": 766,
			"city_code": "52678",
			"name_city": "Samaniego (Nariño)"
		},
		{
			"id": 949,
			"city_code": "70670",
			"name_city": "Sampués (Sucre)"
		},
		{
			"id": 632,
			"city_code": "41668",
			"name_city": "San Agustín (Huila)"
		},
		{
			"id": 425,
			"city_code": "20710",
			"name_city": "San Alberto (Cesar)"
		},
		{
			"id": 1087,
			"city_code": "88001",
			"name_city": "San Andrés (San Andrés y Providencia)"
		},
		{
			"id": 913,
			"city_code": "68669",
			"name_city": "San Andrés (Santander)"
		},
		{
			"id": 89,
			"city_code": "5647",
			"name_city": "San Andrés De Cuerquía (Antioquia)"
		},
		{
			"id": 450,
			"city_code": "23670",
			"name_city": "San Andrés De Sotavento (Córdoba)"
		},
		{
			"id": 777,
			"city_code": "52835",
			"name_city": "San Andrés De Tumaco (Nariño)"
		},
		{
			"id": 451,
			"city_code": "23672",
			"name_city": "San Antero (Córdoba)"
		},
		{
			"id": 998,
			"city_code": "73675",
			"name_city": "San Antonio (Tolima)"
		},
		{
			"id": 535,
			"city_code": "25645",
			"name_city": "San Antonio Del Tequendama (Cundinamarca)"
		},
		{
			"id": 914,
			"city_code": "68673",
			"name_city": "San Benito (Santander)"
		},
		{
			"id": 950,
			"city_code": "70678",
			"name_city": "San Benito Abad (Sucre)"
		},
		{
			"id": 536,
			"city_code": "25649",
			"name_city": "San Bernardo (Cundinamarca)"
		},
		{
			"id": 768,
			"city_code": "52685",
			"name_city": "San Bernardo (Nariño)"
		},
		{
			"id": 452,
			"city_code": "23675",
			"name_city": "San Bernardo Del Viento (Córdoba)"
		},
		{
			"id": 810,
			"city_code": "54670",
			"name_city": "San Calixto (Norte de Santander)"
		},
		{
			"id": 90,
			"city_code": "5649",
			"name_city": "San Carlos (Antioquia)"
		},
		{
			"id": 453,
			"city_code": "23678",
			"name_city": "San Carlos (Córdoba)"
		},
		{
			"id": 711,
			"city_code": "50680",
			"name_city": "San Carlos De Guaroa (Meta)"
		},
		{
			"id": 537,
			"city_code": "25653",
			"name_city": "San Cayetano (Cundinamarca)"
		},
		{
			"id": 811,
			"city_code": "54673",
			"name_city": "San Cayetano (Norte de Santander)"
		},
		{
			"id": 177,
			"city_code": "13620",
			"name_city": "San Cristóbal (Bolívar)"
		},
		{
			"id": 426,
			"city_code": "20750",
			"name_city": "San Diego (Cesar)"
		},
		{
			"id": 277,
			"city_code": "15660",
			"name_city": "San Eduardo (Boyacá)"
		},
		{
			"id": 178,
			"city_code": "13647",
			"name_city": "San Estanislao (Bolívar)"
		},
		{
			"id": 1103,
			"city_code": "94883",
			"name_city": "San Felipe (Guainía)"
		},
		{
			"id": 179,
			"city_code": "13650",
			"name_city": "San Fernando (Bolívar)"
		},
		{
			"id": 91,
			"city_code": "5652",
			"name_city": "San Francisco (Antioquia)"
		},
		{
			"id": 538,
			"city_code": "25658",
			"name_city": "San Francisco (Cundinamarca)"
		},
		{
			"id": 1082,
			"city_code": "86755",
			"name_city": "San Francisco (Putumayo)"
		},
		{
			"id": 915,
			"city_code": "68679",
			"name_city": "San Gil (Santander)"
		},
		{
			"id": 180,
			"city_code": "13654",
			"name_city": "San Jacinto (Bolívar)"
		},
		{
			"id": 181,
			"city_code": "13655",
			"name_city": "San Jacinto Del Cauca (Bolívar)"
		},
		{
			"id": 92,
			"city_code": "5656",
			"name_city": "San Jerónimo (Antioquia)"
		},
		{
			"id": 916,
			"city_code": "68682",
			"name_city": "San Joaquín (Santander)"
		},
		{
			"id": 341,
			"city_code": "17665",
			"name_city": "San José (Caldas)"
		},
		{
			"id": 780,
			"city_code": "54001",
			"name_city": "San José De Cúcuta (Norte de Santander)"
		},
		{
			"id": 93,
			"city_code": "5658",
			"name_city": "San José De La Montaña (Antioquia)"
		},
		{
			"id": 917,
			"city_code": "68684",
			"name_city": "San José De Miranda (Santander)"
		},
		{
			"id": 278,
			"city_code": "15664",
			"name_city": "San José De Pare (Boyacá)"
		},
		{
			"id": 454,
			"city_code": "23682",
			"name_city": "San José De Uré (Córdoba)"
		},
		{
			"id": 357,
			"city_code": "18610",
			"name_city": "San José Del Fragua (Caquetá)"
		},
		{
			"id": 1109,
			"city_code": "95001",
			"name_city": "San José Del Guaviare (Guaviare)"
		},
		{
			"id": 600,
			"city_code": "27660",
			"name_city": "San José Del Palmar (Chocó)"
		},
		{
			"id": 712,
			"city_code": "50683",
			"name_city": "San Juan De Arama (Meta)"
		},
		{
			"id": 951,
			"city_code": "70702",
			"name_city": "San Juan De Betulia (Sucre)"
		},
		{
			"id": 539,
			"city_code": "25662",
			"name_city": "San Juan De Rioseco (Cundinamarca)"
		},
		{
			"id": 94,
			"city_code": "5659",
			"name_city": "San Juan De Urabá (Antioquia)"
		},
		{
			"id": 653,
			"city_code": "44650",
			"name_city": "San Juan Del Cesar (La Guajira)"
		},
		{
			"id": 182,
			"city_code": "13657",
			"name_city": "San Juan Nepomuceno (Bolívar)"
		},
		{
			"id": 713,
			"city_code": "50686",
			"name_city": "San Juanito (Meta)"
		},
		{
			"id": 769,
			"city_code": "52687",
			"name_city": "San Lorenzo (Nariño)"
		},
		{
			"id": 95,
			"city_code": "5660",
			"name_city": "San Luis (Antioquia)"
		},
		{
			"id": 999,
			"city_code": "73678",
			"name_city": "San Luis (Tolima)"
		},
		{
			"id": 279,
			"city_code": "15667",
			"name_city": "San Luis De Gaceno (Boyacá)"
		},
		{
			"id": 1069,
			"city_code": "85325",
			"name_city": "San Luis De Palenque (Casanare)"
		},
		{
			"id": 955,
			"city_code": "70742",
			"name_city": "San Luis De Sincé (Sucre)"
		},
		{
			"id": 952,
			"city_code": "70708",
			"name_city": "San Marcos (Sucre)"
		},
		{
			"id": 427,
			"city_code": "20770",
			"name_city": "San Martín (Cesar)"
		},
		{
			"id": 714,
			"city_code": "50689",
			"name_city": "San Martín (Meta)"
		},
		{
			"id": 183,
			"city_code": "13667",
			"name_city": "San Martín De Loba (Bolívar)"
		},
		{
			"id": 280,
			"city_code": "15673",
			"name_city": "San Mateo (Boyacá)"
		},
		{
			"id": 1083,
			"city_code": "86757",
			"name_city": "San Miguel (Putumayo)"
		},
		{
			"id": 918,
			"city_code": "68686",
			"name_city": "San Miguel (Santander)"
		},
		{
			"id": 281,
			"city_code": "15676",
			"name_city": "San Miguel De Sema (Boyacá)"
		},
		{
			"id": 953,
			"city_code": "70713",
			"name_city": "San Onofre (Sucre)"
		},
		{
			"id": 184,
			"city_code": "13670",
			"name_city": "San Pablo (Bolívar)"
		},
		{
			"id": 770,
			"city_code": "52693",
			"name_city": "San Pablo (Nariño)"
		},
		{
			"id": 282,
			"city_code": "15681",
			"name_city": "San Pablo De Borbur (Boyacá)"
		},
		{
			"id": 954,
			"city_code": "70717",
			"name_city": "San Pedro (Sucre)"
		},
		{
			"id": 1037,
			"city_code": "76670",
			"name_city": "San Pedro (Valle del Cauca)"
		},
		{
			"id": 771,
			"city_code": "52694",
			"name_city": "San Pedro De Cartago (Nariño)"
		},
		{
			"id": 96,
			"city_code": "5664",
			"name_city": "San Pedro De Los Milagros (Antioquia)"
		},
		{
			"id": 97,
			"city_code": "5665",
			"name_city": "San Pedro De Urabá (Antioquia)"
		},
		{
			"id": 455,
			"city_code": "23686",
			"name_city": "San Pelayo (Córdoba)"
		},
		{
			"id": 98,
			"city_code": "5667",
			"name_city": "San Rafael (Antioquia)"
		},
		{
			"id": 99,
			"city_code": "5670",
			"name_city": "San Roque (Antioquia)"
		},
		{
			"id": 392,
			"city_code": "19693",
			"name_city": "San Sebastián (Cauca)"
		},
		{
			"id": 679,
			"city_code": "47692",
			"name_city": "San Sebastián De Buenavista (Magdalena)"
		},
		{
			"id": 984,
			"city_code": "73443",
			"name_city": "San Sebastián De Mariquita (Tolima)"
		},
		{
			"id": 919,
			"city_code": "68689",
			"name_city": "San Vicente De Chucurí (Santander)"
		},
		{
			"id": 358,
			"city_code": "18753",
			"name_city": "San Vicente Del Caguán (Caquetá)"
		},
		{
			"id": 100,
			"city_code": "5674",
			"name_city": "San Vicente Ferrer (Antioquia)"
		},
		{
			"id": 680,
			"city_code": "47703",
			"name_city": "San Zenón (Magdalena)"
		},
		{
			"id": 767,
			"city_code": "52683",
			"name_city": "Sandoná (Nariño)"
		},
		{
			"id": 681,
			"city_code": "47707",
			"name_city": "Santa Ana (Magdalena)"
		},
		{
			"id": 101,
			"city_code": "5679",
			"name_city": "Santa Bárbara (Antioquia)"
		},
		{
			"id": 772,
			"city_code": "52696",
			"name_city": "Santa Bárbara (Nariño)"
		},
		{
			"id": 920,
			"city_code": "68705",
			"name_city": "Santa Bárbara (Santander)"
		},
		{
			"id": 682,
			"city_code": "47720",
			"name_city": "Santa Bárbara De Pinto (Magdalena)"
		},
		{
			"id": 185,
			"city_code": "13673",
			"name_city": "Santa Catalina (Bolívar)"
		},
		{
			"id": 11,
			"city_code": "5042",
			"name_city": "Santa Fé De Antioquia (Antioquia)"
		},
		{
			"id": 921,
			"city_code": "68720",
			"name_city": "Santa Helena Del Opón (Santander)"
		},
		{
			"id": 1000,
			"city_code": "73686",
			"name_city": "Santa Isabel (Tolima)"
		},
		{
			"id": 143,
			"city_code": "8675",
			"name_city": "Santa Lucía (Atlántico)"
		},
		{
			"id": 284,
			"city_code": "15690",
			"name_city": "Santa María (Boyacá)"
		},
		{
			"id": 633,
			"city_code": "41676",
			"name_city": "Santa María (Huila)"
		},
		{
			"id": 657,
			"city_code": "47001",
			"name_city": "Santa Marta (Magdalena)"
		},
		{
			"id": 186,
			"city_code": "13683",
			"name_city": "Santa Rosa (Bolívar)"
		},
		{
			"id": 394,
			"city_code": "19701",
			"name_city": "Santa Rosa (Cauca)"
		},
		{
			"id": 844,
			"city_code": "66682",
			"name_city": "Santa Rosa De Cabal (Risaralda)"
		},
		{
			"id": 102,
			"city_code": "5686",
			"name_city": "Santa Rosa De Osos (Antioquia)"
		},
		{
			"id": 285,
			"city_code": "15693",
			"name_city": "Santa Rosa De Viterbo (Boyacá)"
		},
		{
			"id": 187,
			"city_code": "13688",
			"name_city": "Santa Rosa Del Sur (Bolívar)"
		},
		{
			"id": 1121,
			"city_code": "99624",
			"name_city": "Santa Rosalía (Vichada)"
		},
		{
			"id": 286,
			"city_code": "15696",
			"name_city": "Santa Sofía (Boyacá)"
		},
		{
			"id": 773,
			"city_code": "52699",
			"name_city": "Santacruz (Nariño)"
		},
		{
			"id": 283,
			"city_code": "15686",
			"name_city": "Santana (Boyacá)"
		},
		{
			"id": 393,
			"city_code": "19698",
			"name_city": "Santander De Quilichao (Cauca)"
		},
		{
			"id": 812,
			"city_code": "54680",
			"name_city": "Santiago (Norte de Santander)"
		},
		{
			"id": 1084,
			"city_code": "86760",
			"name_city": "Santiago (Putumayo)"
		},
		{
			"id": 957,
			"city_code": "70820",
			"name_city": "Santiago De Tolú (Sucre)"
		},
		{
			"id": 103,
			"city_code": "5690",
			"name_city": "Santo Domingo (Antioquia)"
		},
		{
			"id": 144,
			"city_code": "8685",
			"name_city": "Santo Tomás (Atlántico)"
		},
		{
			"id": 845,
			"city_code": "66687",
			"name_city": "Santuario (Risaralda)"
		},
		{
			"id": 774,
			"city_code": "52720",
			"name_city": "Sapuyes (Nariño)"
		},
		{
			"id": 1053,
			"city_code": "81736",
			"name_city": "Saravena (Arauca)"
		},
		{
			"id": 813,
			"city_code": "54720",
			"name_city": "Sardinata (Norte de Santander)"
		},
		{
			"id": 540,
			"city_code": "25718",
			"name_city": "Sasaima (Cundinamarca)"
		},
		{
			"id": 287,
			"city_code": "15720",
			"name_city": "Sativanorte (Boyacá)"
		},
		{
			"id": 288,
			"city_code": "15723",
			"name_city": "Sativasur (Boyacá)"
		},
		{
			"id": 105,
			"city_code": "5736",
			"name_city": "Segovia (Antioquia)"
		},
		{
			"id": 541,
			"city_code": "25736",
			"name_city": "Sesquilé (Cundinamarca)"
		},
		{
			"id": 1038,
			"city_code": "76736",
			"name_city": "Sevilla (Valle del Cauca)"
		},
		{
			"id": 289,
			"city_code": "15740",
			"name_city": "Siachoque (Boyacá)"
		},
		{
			"id": 542,
			"city_code": "25740",
			"name_city": "Sibaté (Cundinamarca)"
		},
		{
			"id": 1081,
			"city_code": "86749",
			"name_city": "Sibundoy (Putumayo)"
		},
		{
			"id": 814,
			"city_code": "54743",
			"name_city": "Silos (Norte de Santander)"
		},
		{
			"id": 543,
			"city_code": "25743",
			"name_city": "Silvania (Cundinamarca)"
		},
		{
			"id": 395,
			"city_code": "19743",
			"name_city": "Silvia (Cauca)"
		},
		{
			"id": 922,
			"city_code": "68745",
			"name_city": "Simacota (Santander)"
		},
		{
			"id": 544,
			"city_code": "25745",
			"name_city": "Simijaca (Cundinamarca)"
		},
		{
			"id": 188,
			"city_code": "13744",
			"name_city": "Simití (Bolívar)"
		},
		{
			"id": 933,
			"city_code": "70001",
			"name_city": "Sincelejo (Sucre)"
		},
		{
			"id": 601,
			"city_code": "27745",
			"name_city": "Sipí (Chocó)"
		},
		{
			"id": 683,
			"city_code": "47745",
			"name_city": "Sitionuevo (Magdalena)"
		},
		{
			"id": 545,
			"city_code": "25754",
			"name_city": "Soacha (Cundinamarca)"
		},
		{
			"id": 290,
			"city_code": "15753",
			"name_city": "Soatá (Boyacá)"
		},
		{
			"id": 292,
			"city_code": "15757",
			"name_city": "Socha (Boyacá)"
		},
		{
			"id": 923,
			"city_code": "68755",
			"name_city": "Socorro (Santander)"
		},
		{
			"id": 291,
			"city_code": "15755",
			"name_city": "Socotá (Boyacá)"
		},
		{
			"id": 293,
			"city_code": "15759",
			"name_city": "Sogamoso (Boyacá)"
		},
		{
			"id": 359,
			"city_code": "18756",
			"name_city": "Solano (Caquetá)"
		},
		{
			"id": 145,
			"city_code": "8758",
			"name_city": "Soledad (Atlántico)"
		},
		{
			"id": 360,
			"city_code": "18785",
			"name_city": "Solita (Caquetá)"
		},
		{
			"id": 294,
			"city_code": "15761",
			"name_city": "Somondoco (Boyacá)"
		},
		{
			"id": 106,
			"city_code": "5756",
			"name_city": "Sonsón (Antioquia)"
		},
		{
			"id": 107,
			"city_code": "5761",
			"name_city": "Sopetrán (Antioquia)"
		},
		{
			"id": 189,
			"city_code": "13760",
			"name_city": "Soplaviento (Bolívar)"
		},
		{
			"id": 546,
			"city_code": "25758",
			"name_city": "Sopó (Cundinamarca)"
		},
		{
			"id": 295,
			"city_code": "15762",
			"name_city": "Sora (Boyacá)"
		},
		{
			"id": 297,
			"city_code": "15764",
			"name_city": "Soracá (Boyacá)"
		},
		{
			"id": 296,
			"city_code": "15763",
			"name_city": "Sotaquirá (Boyacá)"
		},
		{
			"id": 396,
			"city_code": "19760",
			"name_city": "Sotara (Cauca)"
		},
		{
			"id": 924,
			"city_code": "68770",
			"name_city": "Suaita (Santander)"
		},
		{
			"id": 146,
			"city_code": "8770",
			"name_city": "Suan (Atlántico)"
		},
		{
			"id": 397,
			"city_code": "19780",
			"name_city": "Suárez (Cauca)"
		},
		{
			"id": 1001,
			"city_code": "73770",
			"name_city": "Suárez (Tolima)"
		},
		{
			"id": 634,
			"city_code": "41770",
			"name_city": "Suaza (Huila)"
		},
		{
			"id": 547,
			"city_code": "25769",
			"name_city": "Subachoque (Cundinamarca)"
		},
		{
			"id": 398,
			"city_code": "19785",
			"name_city": "Sucre (Cauca)"
		},
		{
			"id": 925,
			"city_code": "68773",
			"name_city": "Sucre (Santander)"
		},
		{
			"id": 956,
			"city_code": "70771",
			"name_city": "Sucre (Sucre)"
		},
		{
			"id": 548,
			"city_code": "25772",
			"name_city": "Suesca (Cundinamarca)"
		},
		{
			"id": 549,
			"city_code": "25777",
			"name_city": "Supatá (Cundinamarca)"
		},
		{
			"id": 342,
			"city_code": "17777",
			"name_city": "Supía (Caldas)"
		},
		{
			"id": 926,
			"city_code": "68780",
			"name_city": "Suratá (Santander)"
		},
		{
			"id": 550,
			"city_code": "25779",
			"name_city": "Susa (Cundinamarca)"
		},
		{
			"id": 298,
			"city_code": "15774",
			"name_city": "Susacón (Boyacá)"
		},
		{
			"id": 299,
			"city_code": "15776",
			"name_city": "Sutamarchán (Boyacá)"
		},
		{
			"id": 551,
			"city_code": "25781",
			"name_city": "Sutatausa (Cundinamarca)"
		},
		{
			"id": 300,
			"city_code": "15778",
			"name_city": "Sutatenza (Boyacá)"
		},
		{
			"id": 552,
			"city_code": "25785",
			"name_city": "Tabio (Cundinamarca)"
		},
		{
			"id": 602,
			"city_code": "27787",
			"name_city": "Tadó (Chocó)"
		},
		{
			"id": 190,
			"city_code": "13780",
			"name_city": "Talaigua Nuevo (Bolívar)"
		},
		{
			"id": 428,
			"city_code": "20787",
			"name_city": "Tamalameque (Cesar)"
		},
		{
			"id": 1070,
			"city_code": "85400",
			"name_city": "Támara (Casanare)"
		},
		{
			"id": 1054,
			"city_code": "81794",
			"name_city": "Tame (Arauca)"
		},
		{
			"id": 108,
			"city_code": "5789",
			"name_city": "Támesis (Antioquia)"
		},
		{
			"id": 775,
			"city_code": "52786",
			"name_city": "Taminango (Nariño)"
		},
		{
			"id": 776,
			"city_code": "52788",
			"name_city": "Tangua (Nariño)"
		},
		{
			"id": 1116,
			"city_code": "97666",
			"name_city": "Taraira (Vaupés)"
		},
		{
			"id": 1099,
			"city_code": "91798",
			"name_city": "Tarapacá (Amazonas)"
		},
		{
			"id": 109,
			"city_code": "5790",
			"name_city": "Tarazá (Antioquia)"
		},
		{
			"id": 635,
			"city_code": "41791",
			"name_city": "Tarqui (Huila)"
		},
		{
			"id": 110,
			"city_code": "5792",
			"name_city": "Tarso (Antioquia)"
		},
		{
			"id": 301,
			"city_code": "15790",
			"name_city": "Tasco (Boyacá)"
		},
		{
			"id": 1071,
			"city_code": "85410",
			"name_city": "Tauramena (Casanare)"
		},
		{
			"id": 553,
			"city_code": "25793",
			"name_city": "Tausa (Cundinamarca)"
		},
		{
			"id": 637,
			"city_code": "41799",
			"name_city": "Tello (Huila)"
		},
		{
			"id": 554,
			"city_code": "25797",
			"name_city": "Tena (Cundinamarca)"
		},
		{
			"id": 684,
			"city_code": "47798",
			"name_city": "Tenerife (Magdalena)"
		},
		{
			"id": 555,
			"city_code": "25799",
			"name_city": "Tenjo (Cundinamarca)"
		},
		{
			"id": 302,
			"city_code": "15798",
			"name_city": "Tenza (Boyacá)"
		},
		{
			"id": 815,
			"city_code": "54800",
			"name_city": "Teorama (Norte de Santander)"
		},
		{
			"id": 638,
			"city_code": "41801",
			"name_city": "Teruel (Huila)"
		},
		{
			"id": 636,
			"city_code": "41797",
			"name_city": "Tesalia (Huila)"
		},
		{
			"id": 556,
			"city_code": "25805",
			"name_city": "Tibacuy (Cundinamarca)"
		},
		{
			"id": 303,
			"city_code": "15804",
			"name_city": "Tibaná (Boyacá)"
		},
		{
			"id": 304,
			"city_code": "15806",
			"name_city": "Tibasosa (Boyacá)"
		},
		{
			"id": 557,
			"city_code": "25807",
			"name_city": "Tibirita (Cundinamarca)"
		},
		{
			"id": 816,
			"city_code": "54810",
			"name_city": "Tibú (Norte de Santander)"
		},
		{
			"id": 456,
			"city_code": "23807",
			"name_city": "Tierralta (Córdoba)"
		},
		{
			"id": 639,
			"city_code": "41807",
			"name_city": "Timaná (Huila)"
		},
		{
			"id": 399,
			"city_code": "19807",
			"name_city": "Timbío (Cauca)"
		},
		{
			"id": 400,
			"city_code": "19809",
			"name_city": "Timbiquí (Cauca)"
		},
		{
			"id": 305,
			"city_code": "15808",
			"name_city": "Tinjacá (Boyacá)"
		},
		{
			"id": 306,
			"city_code": "15810",
			"name_city": "Tipacoque (Boyacá)"
		},
		{
			"id": 191,
			"city_code": "13810",
			"name_city": "Tiquisio (Bolívar)"
		},
		{
			"id": 111,
			"city_code": "5809",
			"name_city": "Titiribí (Antioquia)"
		},
		{
			"id": 307,
			"city_code": "15814",
			"name_city": "Toca (Boyacá)"
		},
		{
			"id": 558,
			"city_code": "25815",
			"name_city": "Tocaima (Cundinamarca)"
		},
		{
			"id": 559,
			"city_code": "25817",
			"name_city": "Tocancipá (Cundinamarca)"
		},
		{
			"id": 308,
			"city_code": "15816",
			"name_city": "Togüí (Boyacá)"
		},
		{
			"id": 112,
			"city_code": "5819",
			"name_city": "Toledo (Antioquia)"
		},
		{
			"id": 817,
			"city_code": "54820",
			"name_city": "Toledo (Norte de Santander)"
		},
		{
			"id": 958,
			"city_code": "70823",
			"name_city": "Tolú Viejo (Sucre)"
		},
		{
			"id": 927,
			"city_code": "68820",
			"name_city": "Tona (Santander)"
		},
		{
			"id": 309,
			"city_code": "15820",
			"name_city": "Tópaga (Boyacá)"
		},
		{
			"id": 560,
			"city_code": "25823",
			"name_city": "Topaipí (Cundinamarca)"
		},
		{
			"id": 401,
			"city_code": "19821",
			"name_city": "Toribío (Cauca)"
		},
		{
			"id": 1039,
			"city_code": "76823",
			"name_city": "Toro (Valle del Cauca)"
		},
		{
			"id": 310,
			"city_code": "15822",
			"name_city": "Tota (Boyacá)"
		},
		{
			"id": 402,
			"city_code": "19824",
			"name_city": "Totoró (Cauca)"
		},
		{
			"id": 1072,
			"city_code": "85430",
			"name_city": "Trinidad (Casanare)"
		},
		{
			"id": 1040,
			"city_code": "76828",
			"name_city": "Trujillo (Valle del Cauca)"
		},
		{
			"id": 147,
			"city_code": "8832",
			"name_city": "Tubará (Atlántico)"
		},
		{
			"id": 457,
			"city_code": "23815",
			"name_city": "Tuchín (Córdoba)"
		},
		{
			"id": 1041,
			"city_code": "76834",
			"name_city": "Tuluá (Valle del Cauca)"
		},
		{
			"id": 196,
			"city_code": "15001",
			"name_city": "Tunja (Boyacá)"
		},
		{
			"id": 311,
			"city_code": "15832",
			"name_city": "Tununguá (Boyacá)"
		},
		{
			"id": 778,
			"city_code": "52838",
			"name_city": "Túquerres (Nariño)"
		},
		{
			"id": 192,
			"city_code": "13836",
			"name_city": "Turbaco (Bolívar)"
		},
		{
			"id": 193,
			"city_code": "13838",
			"name_city": "Turbaná (Bolívar)"
		},
		{
			"id": 113,
			"city_code": "5837",
			"name_city": "Turbo (Antioquia)"
		},
		{
			"id": 312,
			"city_code": "15835",
			"name_city": "Turmequé (Boyacá)"
		},
		{
			"id": 313,
			"city_code": "15837",
			"name_city": "Tuta (Boyacá)"
		},
		{
			"id": 314,
			"city_code": "15839",
			"name_city": "Tutazá (Boyacá)"
		},
		{
			"id": 561,
			"city_code": "25839",
			"name_city": "Ubalá (Cundinamarca)"
		},
		{
			"id": 562,
			"city_code": "25841",
			"name_city": "Ubaque (Cundinamarca)"
		},
		{
			"id": 1042,
			"city_code": "76845",
			"name_city": "Ulloa (Valle del Cauca)"
		},
		{
			"id": 315,
			"city_code": "15842",
			"name_city": "Úmbita (Boyacá)"
		},
		{
			"id": 564,
			"city_code": "25845",
			"name_city": "Une (Cundinamarca)"
		},
		{
			"id": 603,
			"city_code": "27800",
			"name_city": "Unguía (Chocó)"
		},
		{
			"id": 604,
			"city_code": "27810",
			"name_city": "Unión Panamericana (Chocó)"
		},
		{
			"id": 114,
			"city_code": "5842",
			"name_city": "Uramita (Antioquia)"
		},
		{
			"id": 703,
			"city_code": "50370",
			"name_city": "Uribe (Meta)"
		},
		{
			"id": 654,
			"city_code": "44847",
			"name_city": "Uribia (La Guajira)"
		},
		{
			"id": 115,
			"city_code": "5847",
			"name_city": "Urrao (Antioquia)"
		},
		{
			"id": 655,
			"city_code": "44855",
			"name_city": "Urumita (La Guajira)"
		},
		{
			"id": 148,
			"city_code": "8849",
			"name_city": "Usiacurí (Atlántico)"
		},
		{
			"id": 565,
			"city_code": "25851",
			"name_city": "Útica (Cundinamarca)"
		},
		{
			"id": 116,
			"city_code": "5854",
			"name_city": "Valdivia (Antioquia)"
		},
		{
			"id": 458,
			"city_code": "23855",
			"name_city": "Valencia (Córdoba)"
		},
		{
			"id": 928,
			"city_code": "68855",
			"name_city": "Valle De San José (Santander)"
		},
		{
			"id": 1002,
			"city_code": "73854",
			"name_city": "Valle De San Juan (Tolima)"
		},
		{
			"id": 1085,
			"city_code": "86865",
			"name_city": "Valle Del Guamuez (Putumayo)"
		},
		{
			"id": 404,
			"city_code": "20001",
			"name_city": "Valledupar (Cesar)"
		},
		{
			"id": 117,
			"city_code": "5856",
			"name_city": "Valparaíso (Antioquia)"
		},
		{
			"id": 361,
			"city_code": "18860",
			"name_city": "Valparaíso (Caquetá)"
		},
		{
			"id": 118,
			"city_code": "5858",
			"name_city": "Vegachí (Antioquia)"
		},
		{
			"id": 929,
			"city_code": "68861",
			"name_city": "Vélez (Santander)"
		},
		{
			"id": 1003,
			"city_code": "73861",
			"name_city": "Venadillo (Tolima)"
		},
		{
			"id": 119,
			"city_code": "5861",
			"name_city": "Venecia (Antioquia)"
		},
		{
			"id": 522,
			"city_code": "25506",
			"name_city": "Venecia (Cundinamarca)"
		},
		{
			"id": 316,
			"city_code": "15861",
			"name_city": "Ventaquemada (Boyacá)"
		},
		{
			"id": 566,
			"city_code": "25862",
			"name_city": "Vergara (Cundinamarca)"
		},
		{
			"id": 1043,
			"city_code": "76863",
			"name_city": "Versalles (Valle del Cauca)"
		},
		{
			"id": 930,
			"city_code": "68867",
			"name_city": "Vetas (Santander)"
		},
		{
			"id": 567,
			"city_code": "25867",
			"name_city": "Vianí (Cundinamarca)"
		},
		{
			"id": 343,
			"city_code": "17867",
			"name_city": "Victoria (Caldas)"
		},
		{
			"id": 120,
			"city_code": "5873",
			"name_city": "Vigía Del Fuerte (Antioquia)"
		},
		{
			"id": 1044,
			"city_code": "76869",
			"name_city": "Vijes (Valle del Cauca)"
		},
		{
			"id": 818,
			"city_code": "54871",
			"name_city": "Villa Caro (Norte de Santander)"
		},
		{
			"id": 246,
			"city_code": "15407",
			"name_city": "Villa De Leyva (Boyacá)"
		},
		{
			"id": 563,
			"city_code": "25843",
			"name_city": "Villa De San Diego De Ubaté (Cundinamarca)"
		},
		{
			"id": 819,
			"city_code": "54874",
			"name_city": "Villa Del Rosario (Norte de Santander)"
		},
		{
			"id": 403,
			"city_code": "19845",
			"name_city": "Villa Rica (Cauca)"
		},
		{
			"id": 1086,
			"city_code": "86885",
			"name_city": "Villagarzón (Putumayo)"
		},
		{
			"id": 568,
			"city_code": "25871",
			"name_city": "Villagómez (Cundinamarca)"
		},
		{
			"id": 1004,
			"city_code": "73870",
			"name_city": "Villahermosa (Tolima)"
		},
		{
			"id": 344,
			"city_code": "17873",
			"name_city": "Villamaría (Caldas)"
		},
		{
			"id": 194,
			"city_code": "13873",
			"name_city": "Villanueva (Bolívar)"
		},
		{
			"id": 1073,
			"city_code": "85440",
			"name_city": "Villanueva (Casanare)"
		},
		{
			"id": 656,
			"city_code": "44874",
			"name_city": "Villanueva (La Guajira)"
		},
		{
			"id": 931,
			"city_code": "68872",
			"name_city": "Villanueva (Santander)"
		},
		{
			"id": 569,
			"city_code": "25873",
			"name_city": "Villapinzón (Cundinamarca)"
		},
		{
			"id": 1005,
			"city_code": "73873",
			"name_city": "Villarrica (Tolima)"
		},
		{
			"id": 687,
			"city_code": "50001",
			"name_city": "Villavicencio (Meta)"
		},
		{
			"id": 640,
			"city_code": "41872",
			"name_city": "Villavieja (Huila)"
		},
		{
			"id": 570,
			"city_code": "25875",
			"name_city": "Villeta (Cundinamarca)"
		},
		{
			"id": 571,
			"city_code": "25878",
			"name_city": "Viotá (Cundinamarca)"
		},
		{
			"id": 317,
			"city_code": "15879",
			"name_city": "Viracachá (Boyacá)"
		},
		{
			"id": 715,
			"city_code": "50711",
			"name_city": "Vistahermosa (Meta)"
		},
		{
			"id": 345,
			"city_code": "17877",
			"name_city": "Viterbo (Caldas)"
		},
		{
			"id": 572,
			"city_code": "25885",
			"name_city": "Yacopí (Cundinamarca)"
		},
		{
			"id": 779,
			"city_code": "52885",
			"name_city": "Yacuanquer (Nariño)"
		},
		{
			"id": 641,
			"city_code": "41885",
			"name_city": "Yaguará (Huila)"
		},
		{
			"id": 121,
			"city_code": "5885",
			"name_city": "Yalí (Antioquia)"
		},
		{
			"id": 122,
			"city_code": "5887",
			"name_city": "Yarumal (Antioquia)"
		},
		{
			"id": 1118,
			"city_code": "97889",
			"name_city": "Yavaraté (Vaupés)"
		},
		{
			"id": 123,
			"city_code": "5890",
			"name_city": "Yolombó (Antioquia)"
		},
		{
			"id": 124,
			"city_code": "5893",
			"name_city": "Yondó (Antioquia)"
		},
		{
			"id": 1055,
			"city_code": "85001",
			"name_city": "Yopal (Casanare)"
		},
		{
			"id": 1045,
			"city_code": "76890",
			"name_city": "Yotoco (Valle del Cauca)"
		},
		{
			"id": 1046,
			"city_code": "76892",
			"name_city": "Yumbo (Valle del Cauca)"
		},
		{
			"id": 195,
			"city_code": "13894",
			"name_city": "Zambrano (Bolívar)"
		},
		{
			"id": 932,
			"city_code": "68895",
			"name_city": "Zapatoca (Santander)"
		},
		{
			"id": 685,
			"city_code": "47960",
			"name_city": "Zapayán (Magdalena)"
		},
		{
			"id": 125,
			"city_code": "5895",
			"name_city": "Zaragoza (Antioquia)"
		},
		{
			"id": 1047,
			"city_code": "76895",
			"name_city": "Zarzal (Valle del Cauca)"
		},
		{
			"id": 318,
			"city_code": "15897",
			"name_city": "Zetaquira (Boyacá)"
		},
		{
			"id": 573,
			"city_code": "25898",
			"name_city": "Zipacón (Cundinamarca)"
		},
		{
			"id": 574,
			"city_code": "25899",
			"name_city": "Zipaquirá (Cundinamarca)"
		},
		{
			"id": 686,
			"city_code": "47980",
			"name_city": "Zona Bananera (Magdalena)"
		}
	];
  constructor(private ApiURL:ApiServerService) { }

  getData(){
    return this.data;
  }
  // getData(){
  //   let me	= this;
  //   return me.ApiURL.get('cities').
  //   pipe(
  //     map( resp => (resp['records']))
  //   );
  // }
}


export interface Cities{
  id            : number;
  city_code     : string;
  name_city     : string;
}
