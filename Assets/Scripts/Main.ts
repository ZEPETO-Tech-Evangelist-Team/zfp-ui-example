import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import UIManager, { WindowCallType } from './UIManager';

export default class Main extends ZepetoScriptBehaviour {

    private static instance : Main;

    public UIManagerGO : GameObject;
    public UIManager : UIManager;

    public static GetInstance() : Main {
        /*if (this.instance !== null || this.instance !== undefined) { //couldn't get this to work, always hitting this if
            console.log("in if");
            return this.instance;
        } else {
            console.log("in else");
            this.instance = GameObject.Find("Main").GetComponent<Main>();
        }*/

        return this.instance;
    }

    Awake() {
        Main.instance = this;
        this.UIManager = this.UIManagerGO.GetComponent<UIManager>();
    }

}