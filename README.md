		
										Overview: 
		
		Project: Leveraging Satisfactory for Programmable Logic Controller (PLC) Simulation and Cyber Security Testing
		Developers: Samuel R. Boyd & Cody N. Collum
		Last Edited: April 29th, 2022
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
								
										Background: 

		Commisioned by Univeristy of South Carolina - Aiken professor & Dragos employee
		For the CSCI 591/592 Capstone Course conducted by: Ph.D Zhenheng Li (USC Aiken)
		Industry Mentor: Mackenize Morris (Dragos)
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
		
		
										What the project does/why it is useful: 
		
The purpose of this project is to create an alternative method for PLC simulation and testing.
The current market options for similar software is limited in the following 4 main categories:
	[1] Prohibitve cost of licenses for the software
	[2] Poor physics engine / lack thereof 
	[3] Clunky mechanics and limited capabilities as far as far as interactibility 
	[4] Lack of components that allow for accurate/simulated penetration testing
This project seeks to solve these problems by leveraging the gaming engine of the game: "Satisfactory"
Through the utilization of the built in gaming/physics engine of the software and support for modifying the game's 
source code through Unreal Engine 4 (UE4) this project corrects these aforementioned limitations of 
current market options. Because of the full scale system that is supported by this project which includes the following: 
	[1] A simulated factory (Satisfactory)
	[2] A means of I/O for the factory (Fics-It Networks mod)
	[3] A REST API for communication(Node.JS web server)
	[4] A visual aid and remote interaction through a Human Machine Interface (HMI) (VTScada HMI) 
This system is capable of supporting more realistic penetration testing due to the expansive/realistic attack surface
that is offered through the use of these softwares.
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------

										Files and programs included in this folder:
 
	[1] .vs File folder: Contains Visual Studio Code auto generated files
	[2] New Application File folder: Contains the VTScada HMI set-up for the FicsIt-Networks HMI
	[3] databse.txt file: Contains the 'binary-string' database that stores factory machine states
	[4] Lua Code.txt file: Contains the LUA code for the Fics-It Networks in-game computer
	[5] README.md file: Contains the world's best README to have ever blessed human eyes
	[6] test.js file: Contains the Node.JS file that stores the code for the web server and REST API
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------

										Necesarry Software: 
										
The following is the necessary software to run this project: 
	[1] Satisfactory, the game, by Coffee Stains Studio on the UE4 software
	[2] Fics-It Networks mod by Panakotta00 
	[3] Node.JS and importing Express.JS
	[4] VTScada 
	[5] Microsoft Visual Studio Code
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------

										General Implementation:

Satisfactory/Fics-It Networks: For this project to work properly you must follow the necessary steps to install the mod 
"Fics-It Networks". The current implementation uses the in-game LUA computer offered in Fics-It Networks mod, and you must 
copy the code from the LUA code.txt file in the project folder into the in-game computer's console.
Though dyanmic factory design is possible using our outline, the current state of our project is a static implementation in which your
factory network includes only the LUA computer, two constructors, and an assembler. To make changes to this design you would need to create
new scripts and implement them for the HMI, as well as change the LUA code in the computer to detect your new factory components.

Node.JS: For the web server to work properly you must import the Express.JS framework into your project because the test.js file code uses it for 
the REST API that we have designed. The paths for the REST API are changeable, but any changes you make need to be accounted for in 
the HMI's JSON/XML and HTTP tags so that the HMI can read I/O values properly.

VTScada: The included VTScada 'New Application' folder is intended to be placed inside your locally installed VTScada folder. For our
implementation the VTScada application folder was placed within the Window's 'C:\' directory and you should then copy and paste this 'New Application'
file folder into the parent VTScada file folder. Included in the 'New Application' file folder there are 4 batch files that should be located in
'C:\VTScada\NewApplication' for this project to work properly. If you have issues, they may be path related so double check that you are following these
instructions properly.
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------
		
										Contact Information for extra information:
										
		Samuel R. Boyd: srboyd@usca.edu
		Cody N. Collum: ccollum@usca.edu / codynathanielc@gmail.com
--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------



