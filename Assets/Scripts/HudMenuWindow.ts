import { Button } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { WindowCallType } from './UIManager';
import Main from './Main';

export default class HudMenuWindow extends ZepetoScriptBehaviour {
    public SettingsButton : Button;

    Start() {    
        this.SettingsButton.onClick.AddListener(() => {
            this.ClickSettingsButton();
        });
    }

    ClickSettingsButton() {
        console.log("click settings button");
        Main.GetInstance().UIManager.ExecuteWindowCommand(WindowCallType.SHOW_SETTINGS_MENU_WINDOW);
    }

}