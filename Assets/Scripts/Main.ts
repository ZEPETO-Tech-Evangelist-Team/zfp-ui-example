import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import UIManager, { WindowCallType } from './UIManager';

export default class Main extends ZepetoScriptBehaviour {

    private static instance : Main;

    public UIManagerGO : GameObject;
    public UIManager : UIManager;

    public static GetInstance() : Main {
        if (this.instance == null || this.instance == undefined) { 
            this.instance = GameObject.Find("Main").GetComponent<Main>();
        } 

        return this.instance;
    }

    Awake() {
        this.UIManager = this.UIManagerGO.GetComponent<UIManager>();
    }

}