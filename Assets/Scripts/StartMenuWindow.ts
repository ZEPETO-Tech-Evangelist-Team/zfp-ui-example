import { Button } from 'UnityEngine.UI';
import { ZepetoPlayers, SpawnInfo, LocalPlayer } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { WorldService } from 'ZEPETO.World';

export default class StartMenuWindow extends ZepetoScriptBehaviour {
    public StartButton : Button;

    Start() {    
        this.StartButton.onClick.AddListener(() => {this.LoadCharacter()});
    }

    public ShowWindow() {
        this.gameObject.SetActive(true);
    }

    public HideWindow() {
        this.gameObject.SetActive(false);
    }

    LoadCharacter() {
        this.HideWindow();
        
        ZepetoPlayers.instance.CreatePlayerWithZepetoId("", WorldService.userId, new SpawnInfo(), true);
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            let player : LocalPlayer = ZepetoPlayers.instance.LocalPlayer;
            player.zepetoPlayer.character.gameObject.tag = "Player";
            player.zepetoPlayer.character.gameObject.name = WorldService.userId;
        });
    }

}