import {HttpClient} from 'aurelia-fetch-client';
import {datatable} from '../node_modules/datatables.net/js/jquery.dataTables'

export class App {
  constructor() {
    
    this.message = 'Hello World!';
    let httpClient = new HttpClient();
    let xx =  httpClient.fetch('http://localhost:54445/api/People')
	.then(response => response.json())
    .then(data => {  
     // console.log('entro ******** ');    
      this.mydata = data.people;
      //console.log('paso ******** ',this.mydata);  
        });
        xx.then(()=>{
        //  console.log('entro 222222222222******** ');  
              //  this.createDT();
        });
  // this.myData=[
  //   {Id:'123'},
  //   {Id:'124'},
  //   {Id:'125'},
  //   {Id:'126'},
  //   ]
};

createDT(){
      $('#table').dataTable({
        "paginate": true
      });
};
   attached() {
    // do something with those divs of class="text" (i.e. run some jQuery plugin)   this.plugin = jQuery(this.element).myPlugin();
//         let httpClient = new HttpClient();
// let xx =  httpClient.fetch('http://localhost:54445/api/People')
// 	.then(response => response.json())
//     .then(data => {      
//       this.mydata = data.people   ;
//         });

//   xx.then( function(){
 
//   });
    // $('#table').dataTable( {
    //     "ajax": 'http://localhost:54445/api/People',
    //     "columns": [
    //         { "people": "Id" },
    //         { "people": "FirstName" },
    //         { "people": "LastName" },
    //         { "people": "Email" },
    //         { "people": "UserName" }            
    //     ]
    // } );
  }
}
  //  this.mydata= [
  //   {
  //     "Id": 50500,
  //     "FirstName": "doug ",
  //     "LastName": "kunz",
  //     "Email": "arrietamd@gmail.com",
  //     "UserName": "arrietamd@gmail.com"
  //   },
  //   {
  //     "Id": 50504,
  //     "FirstName": "kim",
  //     "LastName": "Gambino",
  //     "Email": "cristina.nieva@jbknowledge.com",
  //     "UserName": "cristina.nieva@jbknowledge.com"
  //   },
  //   {
  //     "Id": 50506,
  //     "FirstName": "Lawrence",
  //     "LastName": "Tavares",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "diego@smartbidnet.com"
  //   },
  //   {
  //     "Id": 50508,
  //     "FirstName": "Sebastian",
  //     "LastName": "Costa",
  //     "Email": "rodrigfffo.arteaga@jbkt.com",
  //     "UserName": "scosta"
  //   },
  //   {
  //     "Id": 50510,
  //     "FirstName": "Mike",
  //     "LastName": "Brown",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "SullivanFire6@yahoo.com"
  //   },
  //   {
  //     "Id": 50511,
  //     "FirstName": "Michael",
  //     "LastName": "Cournoyer",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "miketmjelectric@hotmail.com"
  //   },
  //   {
  //     "Id": 50512,
  //     "FirstName": "Roberto",
  //     "LastName": "Bautista",
  //     "Email": "",
  //     "UserName": "robertobautista@bellsouth.net"
  //   },
  //   {
  //     "Id": 50514,
  //     "FirstName": "Laurel",
  //     "LastName": "ellis",
  //     "Email": "arrietamd@jbknowledge.com",
  //     "UserName": "hallidayhomesusa@yahoo.com"
  //   },
  //   {
  //     "Id": 50516,
  //     "FirstName": "Tim",
  //     "LastName": "Carlton",
  //     "Email": "jose.villagran@jbkt.com",
  //     "UserName": "jose.villagran"
  //   },
  //   {
  //     "Id": 50517,
  //     "FirstName": "David",
  //     "LastName": "Anderson",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "danderson@doranconcreteservices.com"
  //   },
  //   {
  //     "Id": 50520,
  //     "FirstName": "Gary",
  //     "LastName": "Prather ",
  //     "Email": "mario.arrieta@jbknowledge.com",
  //     "UserName": "pensacooler@bellsouth.net"
  //   },
  //   {
  //     "Id": 50521,
  //     "FirstName": "Peter",
  //     "LastName": "Burchard",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "winwin.now@gmail.com"
  //   },
  //   {
  //     "Id": 50522,
  //     "FirstName": "Phyllis",
  //     "LastName": "Larrow",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "darlenec1019@sbcglobal.net"
  //   },
  //   {
  //     "Id": 50523,
  //     "FirstName": "Edward",
  //     "LastName": "Webber ",
  //     "Email": "sebastian.bustamante@jbknowledge.com",
  //     "UserName": "sebastian.bustaman@jbknowledge.com"
  //   },
  //   {
  //     "Id": 50524,
  //     "FirstName": "jeffrey",
  //     "LastName": "hummer",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "jhummer"
  //   },
  //   {
  //     "Id": 50525,
  //     "FirstName": "Jerry",
  //     "LastName": "Scheltens",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "jtassociatesllc@yahoo.com"
  //   },
  //   {
  //     "Id": 50526,
  //     "FirstName": "David",
  //     "LastName": "Weber",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "trge@hotmail.com"
  //   },
  //   {
  //     "Id": 50527,
  //     "FirstName": "Erik",
  //     "LastName": "Christopher",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "echristopher"
  //   },
  //   {
  //     "Id": 50529,
  //     "FirstName": "francisco",
  //     "LastName": "farias",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "francisco@lapiedrainc.com"
  //   },
  //   {
  //     "Id": 50530,
  //     "FirstName": "jay",
  //     "LastName": "Melo",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "info@housedesigngc.com"
  //   },
  //   {
  //     "Id": 50531,
  //     "FirstName": "F.",
  //     "LastName": "Mead",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "hmead@fitzgeraldcontractors.com"
  //   },
  //   {
  //     "Id": 50546,
  //     "FirstName": "Russell",
  //     "LastName": "Budd",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "rbudd@walls-swfl.com"
  //   },
  //   {
  //     "Id": 50558,
  //     "FirstName": "Richard",
  //     "LastName": "Marchese",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "richardmsrc@aol.com"
  //   },
  //   {
  //     "Id": 50575,
  //     "FirstName": "Buzz",
  //     "LastName": "Park",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "buzz@melpsteel.com"
  //   },
  //   {
  //     "Id": 50606,
  //     "FirstName": "Ridge",
  //     "LastName": "Rote",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "premiumillwork@comcast.net"
  //   },
  //   {
  //     "Id": 50638,
  //     "FirstName": "ELAINE",
  //     "LastName": "SANTOS",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "diamondwalls@hotmail.com"
  //   },
  //   {
  //     "Id": 50655,
  //     "FirstName": "Linda S.",
  //     "LastName": "Kamm",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "lsn1118@mchsi.com"
  //   },
  //   {
  //     "Id": 50656,
  //     "FirstName": "Romeo",
  //     "LastName": "Ciuperca",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "leo@eurocraftwall.com"
  //   },
  //   {
  //     "Id": 50658,
  //     "FirstName": "Mr",
  //     "LastName": "Frey",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "GFrey@HNA-civil.com"
  //   },
  //   {
  //     "Id": 50661,
  //     "FirstName": "Bruce",
  //     "LastName": "Clark",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "bruce@summitdrywall.com"
  //   },
  //   {
  //     "Id": 50869,
  //     "FirstName": "Bryce",
  //     "LastName": "Clarambeau",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "beccla2@icehouse.net"
  //   },
  //   {
  //     "Id": 50872,
  //     "FirstName": "paul",
  //     "LastName": "woods",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "woodspainting@pineland.net"
  //   },
  //   {
  //     "Id": 50896,
  //     "FirstName": "Meghan",
  //     "LastName": "Hickford",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "staffordbuildingco@yahoo.com"
  //   },
  //   {
  //     "Id": 50897,
  //     "FirstName": "Daniel",
  //     "LastName": "Bibikov",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "daniel_1238@yahoo.com"
  //   },
  //   {
  //     "Id": 50910,
  //     "FirstName": "Mark ",
  //     "LastName": "Fly",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "mark@flyconsulting.net"
  //   },
  //   {
  //     "Id": 50918,
  //     "FirstName": "Ed",
  //     "LastName": "Allen",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "eallen@electricominc.com"
  //   },
  //   {
  //     "Id": 50955,
  //     "FirstName": "Keith",
  //     "LastName": "Bezold",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "Kbezold87@aol.com"
  //   },
  //   {
  //     "Id": 50958,
  //     "FirstName": "Ronnie",
  //     "LastName": "Flake",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "rflake@cssfireproofing.com"
  //   },
  //   {
  //     "Id": 50965,
  //     "FirstName": "Christina",
  //     "LastName": "els",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "christina.els@archfloors.com"
  //   },
  //   {
  //     "Id": 51253,
  //     "FirstName": "James",
  //     "LastName": "Benham",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "james@jbkt.com"
  //   },
  //   {
  //     "Id": 51255,
  //     "FirstName": "jim ",
  //     "LastName": "stanley",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "james@jbkonwledge.com"
  //   },
  //   {
  //     "Id": 51301,
  //     "FirstName": "Melinda",
  //     "LastName": "Weeks",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "mweeks@rescomdoors.com"
  //   },
  //   {
  //     "Id": 51985,
  //     "FirstName": "dan",
  //     "LastName": "underwood",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "underwoodflooring@comcast.net"
  //   },
  //   {
  //     "Id": 52031,
  //     "FirstName": "Nicole",
  //     "LastName": "Llewellyn",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "Nicole@bpigroupinc.com"
  //   },
  //   {
  //     "Id": 52050,
  //     "FirstName": "Jeffrey ",
  //     "LastName": "Hummer",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "pawn123457@yahoo.com"
  //   },
  //   {
  //     "Id": 52051,
  //     "FirstName": "Larry ",
  //     "LastName": "Donnelly",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "ldsbricks@comcast.net"
  //   },
  //   {
  //     "Id": 52052,
  //     "FirstName": "Paul ",
  //     "LastName": "Pettigrew",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "ppettigrew@entechsales.com"
  //   },
  //   {
  //     "Id": 52053,
  //     "FirstName": "Randall",
  //     "LastName": "Collins",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "ecbuilder78@yahoo.com"
  //   },
  //   {
  //     "Id": 52054,
  //     "FirstName": "Mike",
  //     "LastName": "Needham",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "mike.tojico@covad.net"
  //   },
  //   {
  //     "Id": 52055,
  //     "FirstName": "Katrina",
  //     "LastName": "Evans",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "kevans@polyvision.com"
  //   },
  //   {
  //     "Id": 52090,
  //     "FirstName": "Charles",
  //     "LastName": "Pike",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "ckpike309@aol.com"
  //   },
  //   {
  //     "Id": 52099,
  //     "FirstName": "Nathan",
  //     "LastName": "Johnson",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "njohnson@sheffieldmetals.com"
  //   },
  //   {
  //     "Id": 52138,
  //     "FirstName": "Kenan",
  //     "LastName": "Hadzic",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "pspc_inc@hotmail.com"
  //   },
  //   {
  //     "Id": 52144,
  //     "FirstName": "barry",
  //     "LastName": "gray",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "turnerwoodworks@yahoo.com"
  //   },
  //   {
  //     "Id": 52159,
  //     "FirstName": "SETH ",
  //     "LastName": "KARPEN",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "KARPENNY@EARTHLINK.NET"
  //   },
  //   {
  //     "Id": 52161,
  //     "FirstName": "Stephen ",
  //     "LastName": "Milano",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "stephen@truwall.net"
  //   },
  //   {
  //     "Id": 52191,
  //     "FirstName": "Kirk",
  //     "LastName": "Baker",
  //     "Email": "",
  //     "UserName": "kirk@crowndelta.net"
  //   },
  //   {
  //     "Id": 52192,
  //     "FirstName": "Mark",
  //     "LastName": "Royerre",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "mark@rccflooring.com"
  //   },
  //   {
  //     "Id": 52193,
  //     "FirstName": "Joseph",
  //     "LastName": "Paschitti",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "joe@diamonddrywall.com"
  //   },
  //   {
  //     "Id": 52194,
  //     "FirstName": "John",
  //     "LastName": "Zimmerman",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "accentmirror@msn.com"
  //   },
  //   {
  //     "Id": 52195,
  //     "FirstName": "Susan",
  //     "LastName": "Leatherman",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "susan@benchmarkshelving.com"
  //   },
  //   {
  //     "Id": 52219,
  //     "FirstName": "Reynaldo",
  //     "LastName": "Cruz",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "reycruzservices@yahoo.com"
  //   },
  //   {
  //     "Id": 52245,
  //     "FirstName": "Jeff",
  //     "LastName": "Hall",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "jeffhall@airtimehvac.com"
  //   },
  //   {
  //     "Id": 52246,
  //     "FirstName": "Annette",
  //     "LastName": "Mahoney",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "amahoney@southwestsolutions.com"
  //   },
  //   {
  //     "Id": 52247,
  //     "FirstName": "Thomas",
  //     "LastName": "Dennis",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "t.dennis@femoran.com"
  //   },
  //   {
  //     "Id": 52248,
  //     "FirstName": "Edward",
  //     "LastName": "Voccia",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "edv177"
  //   },
  //   {
  //     "Id": 52271,
  //     "FirstName": "james ",
  //     "LastName": "walker",
  //     "Email": "julian.fernandez@jbknowledge.com",
  //     "UserName": "amn-mechanc@earthlink.net"
  //   },
  //   {
  //     "Id": 52295,
  //     "FirstName": "Tony",
  //     "LastName": "Gilbert",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "tony@hardware-resources.us"
  //   },
  //   {
  //     "Id": 52316,
  //     "FirstName": "Kenny",
  //     "LastName": "Stevens",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "ohmselectric@hotmail.com"
  //   },
  //   {
  //     "Id": 52317,
  //     "FirstName": "darryl",
  //     "LastName": "shaffer",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "saldar92@comcast.net"
  //   },
  //   {
  //     "Id": 52318,
  //     "FirstName": "Charles ",
  //     "LastName": "Shock",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "charles@shockbrothers.com"
  //   },
  //   {
  //     "Id": 52319,
  //     "FirstName": "Leon",
  //     "LastName": "Anderson",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "Leon@Leonandersonconstruction.com"
  //   },
  //   {
  //     "Id": 52320,
  //     "FirstName": "Eric",
  //     "LastName": "Nawrotzki",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "cfmetal@aol.com"
  //   },
  //   {
  //     "Id": 52321,
  //     "FirstName": "Paul ",
  //     "LastName": "Ingle",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "paul.ingle@designcentersigns.com"
  //   },
  //   {
  //     "Id": 52322,
  //     "FirstName": "MIKE",
  //     "LastName": "TESORIERO",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "JEMCOCORP@AOL.COM"
  //   },
  //   {
  //     "Id": 52336,
  //     "FirstName": "Mitchell",
  //     "LastName": "Stamps",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "mstamps@dssfire.com"
  //   },
  //   {
  //     "Id": 52338,
  //     "FirstName": "PETER ",
  //     "LastName": "FISHMAN",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "TEXASFISHMANS@AUSTIN.RR.COM"
  //   },
  //   {
  //     "Id": 52340,
  //     "FirstName": "NICK ",
  //     "LastName": "PHILLIPS",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "FYBELECTRIC@AOL.COM"
  //   },
  //   {
  //     "Id": 52358,
  //     "FirstName": "fred",
  //     "LastName": "liberatore",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "fyiresources@aol.com"
  //   },
  //   {
  //     "Id": 52431,
  //     "FirstName": "Bob",
  //     "LastName": "Pearson",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "rpearso1@maine.rr.com"
  //   },
  //   {
  //     "Id": 52447,
  //     "FirstName": "Anthony ",
  //     "LastName": "Gravatte",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "tony@electricalunlimited.net"
  //   },
  //   {
  //     "Id": 52463,
  //     "FirstName": "Albert ",
  //     "LastName": "Candray",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "acinteriors@hotmail.com"
  //   },
  //   {
  //     "Id": 52572,
  //     "FirstName": "G",
  //     "LastName": "Farnell",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "rainbowdemoco@aol.com"
  //   },
  //   {
  //     "Id": 52598,
  //     "FirstName": "Jeff",
  //     "LastName": "Capuano",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "candjcapuano@verizon.net"
  //   },
  //   {
  //     "Id": 52640,
  //     "FirstName": "allen ",
  //     "LastName": "rapaport",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "allen@rapaportwoodfloors.com"
  //   },
  //   {
  //     "Id": 52641,
  //     "FirstName": "Daniel",
  //     "LastName": "Tuck",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "tuck@prowalldrywall.com"
  //   },
  //   {
  //     "Id": 52642,
  //     "FirstName": "David ",
  //     "LastName": "Bednarski",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "david@bestwayplumbing.com"
  //   },
  //   {
  //     "Id": 52657,
  //     "FirstName": "Ross",
  //     "LastName": "Lapham",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "estimating@accurateacoustics.net"
  //   },
  //   {
  //     "Id": 52743,
  //     "FirstName": "Ty",
  //     "LastName": "Creamer",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "tycreamer@classicalfrenchdoor.com"
  //   },
  //   {
  //     "Id": 52765,
  //     "FirstName": "STEVEN",
  //     "LastName": "JACKSON",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "SJAC1306@AOL.COM"
  //   },
  //   {
  //     "Id": 52766,
  //     "FirstName": "Jason",
  //     "LastName": "Stively",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "jason@vspainting.com"
  //   },
  //   {
  //     "Id": 52787,
  //     "FirstName": "BOB ",
  //     "LastName": "WILBER",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "bobwilber.crane@charterinternet.com"
  //   },
  //   {
  //     "Id": 52801,
  //     "FirstName": "Wade ",
  //     "LastName": "Hatch, Sr.",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "wadeh@hatchconstructionservices.com"
  //   },
  //   {
  //     "Id": 52802,
  //     "FirstName": "Jeff",
  //     "LastName": "Vaillancourt",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "Jeff@amityelectric.com"
  //   },
  //   {
  //     "Id": 52826,
  //     "FirstName": "ROBERT ",
  //     "LastName": "LUDA",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "ROBERTL@DIGITALELECTRICINC.COM"
  //   },
  //   {
  //     "Id": 52867,
  //     "FirstName": "Michael",
  //     "LastName": "Ferrarie",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "demoguyz@yahoo.com"
  //   },
  //   {
  //     "Id": 52868,
  //     "FirstName": "Randy ",
  //     "LastName": "Powers",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "powershardwood@earthlink.net"
  //   },
  //   {
  //     "Id": 52869,
  //     "FirstName": "Dolphy",
  //     "LastName": "Ryan",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "cabinetdoctor@sbcglobal.net"
  //   },
  //   {
  //     "Id": 52870,
  //     "FirstName": "Justine",
  //     "LastName": "Gooding",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "logicmechanical@austin.rr.com"
  //   },
  //   {
  //     "Id": 52871,
  //     "FirstName": "Nathan",
  //     "LastName": "Elstad",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "nathan.elstad@cfconsultantsllc.com"
  //   },
  //   {
  //     "Id": 52873,
  //     "FirstName": "Dursun",
  //     "LastName": "Namoglu",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "dnp@aepinc-commercialconstruction.com"
  //   },
  //   {
  //     "Id": 52874,
  //     "FirstName": "Les ",
  //     "LastName": "Barabas",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "lbarabascdi@aol.com"
  //   },
  //   {
  //     "Id": 52875,
  //     "FirstName": "Peter ",
  //     "LastName": "Johannesen",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "peter@brushstrokespaintingllc.com"
  //   },
  //   {
  //     "Id": 52876,
  //     "FirstName": "ben ",
  //     "LastName": "nikkar",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "bnikkar@aol.com"
  //   },
  //   {
  //     "Id": 52877,
  //     "FirstName": "Rob",
  //     "LastName": "Neibert",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "centralcitiescontracting@yahoo.com"
  //   },
  //   {
  //     "Id": 52878,
  //     "FirstName": "Britt",
  //     "LastName": "Stewart",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "granitetrust@hotmail.com"
  //   },
  //   {
  //     "Id": 52879,
  //     "FirstName": "Robert",
  //     "LastName": "Iglanov",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "electroplasma@comcast.net"
  //   },
  //   {
  //     "Id": 52881,
  //     "FirstName": "Joe ",
  //     "LastName": "Rocco",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "Jred656@aol.com"
  //   },
  //   {
  //     "Id": 52882,
  //     "FirstName": "Kamy",
  //     "LastName": "Zar",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "KamyElectric@sbcglobal.net"
  //   },
  //   {
  //     "Id": 52883,
  //     "FirstName": "Rick ",
  //     "LastName": "St Henry",
  //     "Email": "",
  //     "UserName": "rsthenry@yahoo.com"
  //   },
  //   {
  //     "Id": 52886,
  //     "FirstName": "GREGORY",
  //     "LastName": "CODNER",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "LOVTAPAINT@AOL.COM"
  //   },
  //   {
  //     "Id": 52887,
  //     "FirstName": "Allen ",
  //     "LastName": "Lombardi",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "mmi21@verizon.net"
  //   },
  //   {
  //     "Id": 52888,
  //     "FirstName": "Jim ",
  //     "LastName": "Hauser",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "idealjd@aol.com"
  //   },
  //   {
  //     "Id": 52889,
  //     "FirstName": "Eddie",
  //     "LastName": "Melton",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "ed@empaintingandremodeling.com"
  //   },
  //   {
  //     "Id": 52890,
  //     "FirstName": "Jeff",
  //     "LastName": "Cox",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "coxfloorstogo@yahoo.com"
  //   },
  //   {
  //     "Id": 52893,
  //     "FirstName": "Kevin",
  //     "LastName": "McKernan",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "Kevin_mac@comcast.net"
  //   },
  //   {
  //     "Id": 52895,
  //     "FirstName": "Roy",
  //     "LastName": "Sheltra",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "rgsinc@maine.rr.com"
  //   },
  //   {
  //     "Id": 52896,
  //     "FirstName": "George",
  //     "LastName": "Heldt",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "nwfabman@ameritech.net"
  //   },
  //   {
  //     "Id": 52897,
  //     "FirstName": "Joel",
  //     "LastName": "Migliore",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "joel@accuratepainting.biz"
  //   },
  //   {
  //     "Id": 52901,
  //     "FirstName": "Michelle ",
  //     "LastName": "DaCosta",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "jdc.install@verizon.net"
  //   },
  //   {
  //     "Id": 52902,
  //     "FirstName": "Mark ",
  //     "LastName": "Farver",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "rgrubbs@txcustom.com"
  //   },
  //   {
  //     "Id": 52903,
  //     "FirstName": "Josh",
  //     "LastName": "Booth",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "josh@farmerselectric.net"
  //   },
  //   {
  //     "Id": 52904,
  //     "FirstName": "Mary",
  //     "LastName": "Symonds",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "mary@americasflags.com"
  //   },
  //   {
  //     "Id": 52906,
  //     "FirstName": "Chad",
  //     "LastName": "Gregory",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "chad@armoredconstruction.com"
  //   },
  //   {
  //     "Id": 52907,
  //     "FirstName": "Bradley",
  //     "LastName": "Moss",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "Bradleyelect@aol.com"
  //   },
  //   {
  //     "Id": 52908,
  //     "FirstName": "Fred",
  //     "LastName": "Lozoya",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "fred@4azair.com"
  //   },
  //   {
  //     "Id": 52910,
  //     "FirstName": "Michael",
  //     "LastName": "Ryan",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "Estesco@gmail.com"
  //   },
  //   {
  //     "Id": 52911,
  //     "FirstName": "Chuck",
  //     "LastName": "Dauwalder",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "stonestarcommercial@hotmail.com"
  //   },
  //   {
  //     "Id": 52912,
  //     "FirstName": "Ashley",
  //     "LastName": "Nombrana",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "mgriffin@ubsdoors.com"
  //   },
  //   {
  //     "Id": 52913,
  //     "FirstName": "Glen",
  //     "LastName": "Bott",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "g.bott@att.net"
  //   },
  //   {
  //     "Id": 52914,
  //     "FirstName": "Jody   M.",
  //     "LastName": "Favia",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "jody@apcind.com"
  //   },
  //   {
  //     "Id": 52915,
  //     "FirstName": "Dave ",
  //     "LastName": "Peras",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "davep@libertyelectric.com"
  //   },
  //   {
  //     "Id": 52919,
  //     "FirstName": "JAMES",
  //     "LastName": "DONOVAN",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "jsdo@msn.com"
  //   },
  //   {
  //     "Id": 52920,
  //     "FirstName": "steve",
  //     "LastName": "heyen",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "diego@smartbidnet.com"
  //   },
  //   {
  //     "Id": 52922,
  //     "FirstName": "Ernest",
  //     "LastName": "Lewis",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "imperial200@comcast.net"
  //   },
  //   {
  //     "Id": 52926,
  //     "FirstName": "CHARLES",
  //     "LastName": "GORDON",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "ALCOREFGANMECH@AOL.COM/ALCO"
  //   },
  //   {
  //     "Id": 52927,
  //     "FirstName": "Michele",
  //     "LastName": "McIntyre",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "aawallsystems@gmail.com"
  //   },
  //   {
  //     "Id": 52930,
  //     "FirstName": "sid",
  //     "LastName": "kim",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "kim_sid@hotmail.com"
  //   },
  //   {
  //     "Id": 52931,
  //     "FirstName": "Lisa",
  //     "LastName": "Odette",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "lisa@libertyglazing.com"
  //   },
  //   {
  //     "Id": 52941,
  //     "FirstName": "George ",
  //     "LastName": "Legrand",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "satview@aol.com"
  //   },
  //   {
  //     "Id": 52942,
  //     "FirstName": "Chris",
  //     "LastName": "Byrne",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "cbyrne@completefp.com"
  //   },
  //   {
  //     "Id": 52943,
  //     "FirstName": "george",
  //     "LastName": "brunk",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "g.brunk@sbcglobal.net"
  //   },
  //   {
  //     "Id": 52944,
  //     "FirstName": "Charles",
  //     "LastName": "Fiero",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "kbfiero@moment.net"
  //   },
  //   {
  //     "Id": 56977,
  //     "FirstName": "Lee",
  //     "LastName": "Darnell",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "leedelectric@aol.com"
  //   },
  //   {
  //     "Id": 56981,
  //     "FirstName": "PAUL",
  //     "LastName": "MIRANDA",
  //     "Email": "ruben.tejerina@jbknowledge.com",
  //     "UserName": "ruben.tejerina@jbknowledge.com"
  //   },
  //   {
  //     "Id": 56985,
  //     "FirstName": "Chris",
  //     "LastName": "Meyer",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "chris.afp@fuse.net"
  //   },
  //   {
  //     "Id": 56987,
  //     "FirstName": "Kath",
  //     "LastName": "Orris",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "aplusdemou@aol.com"
  //   },
  //   {
  //     "Id": 56988,
  //     "FirstName": "Bill",
  //     "LastName": "Baker",
  //     "Email": "diego@smartbidnet.com",
  //     "UserName": "bill@bluebooties.com"
  //   }
  //  ];