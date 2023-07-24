import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import UIManager, { WindowCallType } from './UIManager';

export default class Main extends ZepetoScriptBehaviour {

    private static instance : Main;

    public UIManagerGO : GameObject;
    public UIManager : UIManager;

    public static GetInstance() : Main {
        if (this.instance !== null) {
            return this.instance;
        } else {
            GameObject.Find("Main").GetComponent<Main>();
        }
    }

    Start() {
        this.UIManager = this.UIManagerGO.GetComponent<UIManager>();

        this.UIManager.ExecuteWindowCommand(WindowCallType.SHOW_START_MENU_WINDOW);
    }

}