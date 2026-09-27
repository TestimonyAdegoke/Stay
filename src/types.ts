export type CommitmentKind="practice"|"limit"|"block";
export type EnforcementLevel="gentle"|"firm"|"locked";
export type Commitment={id:string;title:string;subtitle:string;kind:CommitmentKind;progress:number;target:string;streak?:number;status:"on-track"|"attention"|"complete";icon:string;enforcement:EnforcementLevel;partnerVisible:boolean};
export type Partner={id:string;name:string;relationship:string;initials:string;commitments:number;status:"active"|"invited"};
export type Activity={id:string;title:string;detail:string;time:string;tone:"good"|"neutral"|"attention"};
