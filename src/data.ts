import {Activity,Commitment,Partner} from "./types";
export const commitments:Commitment[]=[
{id:"prayer",title:"Morning prayer",subtitle:"Daily · before 8:00 AM",kind:"practice",progress:.72,target:"30 min",streak:12,status:"on-track",icon:"sunny-outline",enforcement:"firm",partnerVisible:true},
{id:"scripture",title:"Scripture",subtitle:"Daily reading plan",kind:"practice",progress:1,target:"2 chapters",streak:8,status:"complete",icon:"book-outline",enforcement:"gentle",partnerVisible:true},
{id:"social",title:"Social media",subtitle:"Instagram, X & TikTok",kind:"limit",progress:.63,target:"45 min max",status:"on-track",icon:"phone-portrait-outline",enforcement:"locked",partnerVisible:true},
{id:"explicit",title:"Explicit content",subtitle:"Restricted web categories",kind:"block",progress:1,target:"Blocked",status:"complete",icon:"shield-checkmark-outline",enforcement:"locked",partnerVisible:true},
];
export const partners:Partner[]=[{id:"1",name:"David",relationship:"Accountability partner",initials:"DA",commitments:4,status:"active"},{id:"2",name:"Maya",relationship:"Study partner",initials:"MO",commitments:1,status:"active"}];
export const activity:Activity[]=[{id:"1",title:"Scripture completed",detail:"2 chapters · 18 minutes",time:"7:42 AM",tone:"good"},{id:"2",title:"Morning prayer",detail:"22 of 30 minutes",time:"6:58 AM",tone:"neutral"},{id:"3",title:"Social media boundary",detail:"28 of 45 minutes used",time:"10:16 AM",tone:"neutral"}];
