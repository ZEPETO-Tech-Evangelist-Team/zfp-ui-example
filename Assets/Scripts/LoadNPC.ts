import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {CharacterInfo, SpawnInfo, ZepetoPlayers} from "ZEPETO.Character.Controller";
import {WorldService} from "ZEPETO.World";

export default class DialogueNPC extends ZepetoScriptBehaviour {
    public npcUserId: string;
    
    Start()
    {
        let spawnInfo: SpawnInfo = new SpawnInfo();
        spawnInfo.position = this.transform.position;
        spawnInfo.rotation = this.transform.rotation;

        ZepetoPlayers.instance.CreatePlayerWithZepetoId("", this.npcUserId, spawnInfo, false);
    }

}