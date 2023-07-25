import { Button } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class SettingsMenuWindow extends ZepetoScriptBehaviour {
    XButton : Button;

    Start() {    
        this.XButton.onClick.AddListener(() => {
            this.ClickXButton();
        });
    }

    ShowWindow() {
        this.gameObject.SetActive(true);
    }

    HideWindow() {
        this.gameObject.SetActive(false);
    }

    ClickXButton() {
        this.HideWindow();
    }

}