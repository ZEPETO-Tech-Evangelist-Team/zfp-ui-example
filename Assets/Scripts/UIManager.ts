import { GameObject } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import StartMenuWindow from './StartMenuWindow';
import EndMenuWindow from './EndMenuWindow';
import DialogueMenuWindow from './DialogueMenuWindow';
import SettingsMenuWindow from './SettingsMenuWindow';

export enum WindowCallType{
    SHOW_START_MENU_WINDOW = 1,
    HIDE_START_MENU_WINDOW = 2,

    SHOW_END_MENU_WINDOW = 3,
    HIDE_END_MENU_WINDOW = 4,

    SHOW_DIALOGUE_MENU_WINDOW = 5,
    HIDE_DIALOGUE_MENU_WINDOW = 6,

    SHOW_SETTINGS_MENU_WINDOW = 7,
    HIDE_SETTINGS_MENU_WINDOW = 8,
}

export default class UIManager extends ZepetoScriptBehaviour {
    private _startMenuWindow : StartMenuWindow;
    private _endMenuWindow : EndMenuWindow;
    private _dialogueMenuWindow : DialogueMenuWindow;
    private _settingsMenuWindow : SettingsMenuWindow;


    Start() {    
    }

    public get StartMenuWindow(): StartMenuWindow
    {
        if (this._startMenuWindow != undefined)
        {
            return this._startMenuWindow;
        }else{
           this._startMenuWindow = GameObject.Find("StartMenuWindow").GetComponent<StartMenuWindow>();
           return this._startMenuWindow;
        }
    }

    public get EndMenuWindow(): EndMenuWindow
    {
        if (this._endMenuWindow != undefined)
        {
            return this._endMenuWindow;
        }else{
           this._endMenuWindow = GameObject.Find("EndMenuWindow").GetComponent<EndMenuWindow>();
           return this._endMenuWindow;
        }
    }

    public get DialogueMenuWindow(): DialogueMenuWindow
    {
        if (this._dialogueMenuWindow != undefined)
        {
            return this._dialogueMenuWindow;
        }else{
           this._dialogueMenuWindow = GameObject.Find("DialogueMenuWindow").GetComponent<DialogueMenuWindow>();
           return this._dialogueMenuWindow;
        }
    }

    public get SettingsMenuWindow(): SettingsMenuWindow
    {
        if (this._settingsMenuWindow != undefined)
        {
            return this._settingsMenuWindow;
        }else{
           this._settingsMenuWindow = GameObject.Find("SettingsMenuWindow").GetComponent<SettingsMenuWindow>();
           return this._settingsMenuWindow;
        }
    }

    HideAllWindows() {
        this.StartMenuWindow.HideWindow();
        this.EndMenuWindow.HideWindow();
        this.DialogueMenuWindow.HideWindow();
    }

    ExecuteWindowCommand(windowCallType : WindowCallType) {
        switch (windowCallType) {
            case WindowCallType.SHOW_START_MENU_WINDOW:
                this.HideAllWindows();
                this.StartMenuWindow.ShowWindow();
            break;
            case WindowCallType.HIDE_START_MENU_WINDOW:
                this.StartMenuWindow.HideWindow();
            break;

            case WindowCallType.SHOW_END_MENU_WINDOW:
                this.HideAllWindows();
                this.EndMenuWindow.ShowWindow();
            break;
            case WindowCallType.HIDE_END_MENU_WINDOW:
                this.EndMenuWindow.HideWindow();
            break;

            case WindowCallType.SHOW_DIALOGUE_MENU_WINDOW:
                this.HideAllWindows();
                this.DialogueMenuWindow.ShowWindow();
            break;
            case WindowCallType.HIDE_DIALOGUE_MENU_WINDOW:
                this.DialogueMenuWindow.HideWindow();
            break;

            case WindowCallType.SHOW_SETTINGS_MENU_WINDOW:
                this.HideAllWindows();
                this.SettingsMenuWindow.ShowWindow();
            break;
            case WindowCallType.HIDE_SETTINGS_MENU_WINDOW:
                this.SettingsMenuWindow.HideWindow();
            break;
        
            default:
            break;
        }
    }



}