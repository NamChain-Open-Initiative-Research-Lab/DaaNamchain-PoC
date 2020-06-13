//Donor ABI and Address

//Smart Contract Address
	var donorSCAddr = '0x41Abcd5E2cE90A0871626f413A3F554595e4286e';
	
// Smart Contract ABI - Application Binary Interfaces
		var donorABI = [
	{
		"inputs": [],
		"name": "getAllDonors",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ui_d_name",
				"type": "string"
			},
			{
				"internalType": "enum Donor.dGender",
				"name": "ui_d_gnd",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "ui_d_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_d_age",
				"type": "uint256"
			},
			{
				"internalType": "enum Donor.bGrp",
				"name": "ui_d_Bgrp",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "ui_d_cnct_no",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_d_addr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_d_state",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_d_cntry",
				"type": "string"
			}
		],
		"name": "registerDnr",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ui_d_address",
				"type": "address"
			}
		],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "enum Donor.dGender",
				"name": "Gender",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "Age",
				"type": "uint256"
			},
			{
				"internalType": "enum Donor.bGrp",
				"name": "BloodGroup",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "ContactNum",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "State",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Country",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
		

//Doctor ABI and Address

var docSCAddr = '0xd5EE7ED4a2bf523F9bE4e00c1a4549F4A041F25b';

var docABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ui_cls_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_cls_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_cls_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_cls_cnct_no",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_cls_hosp_name",
				"type": "string"
			}
		],
		"name": "registerCls",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllDoctors",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ui_d_address",
				"type": "address"
			}
		],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "string",
				"name": "ID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ContactNum",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]



//Hospital ABI and Address

 hospSCAddr = '0x6Bac0e5EEb48606c1CE3d06A2506691198c09bF3';  


 hospABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ui_hosp_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "ui_hosp_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_hosp_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_hosp_cnct_no",
				"type": "string"
			},
			{
				"internalType": "enum Hospital.htype",
				"name": "ui_hosp_type",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "ui_hosp_addr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_hosp_state",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_hosp_cntry",
				"type": "string"
			}
		],
		"name": "registerHosp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ui_off_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_off_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_off_email",
				"type": "string"
			}
		],
		"name": "registerOff",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllHospitals",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ui_hosp_address",
				"type": "address"
			}
		],
		"name": "retrieveHosp",
		"outputs": [
			{
				"internalType": "string",
				"name": "Hospital_ID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Hospital_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Hospital_Contact_num",
				"type": "string"
			},
			{
				"internalType": "enum Hospital.htype",
				"name": "Hospital_Type",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "Hospital_Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Hospital_State",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Hospital_Country",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

