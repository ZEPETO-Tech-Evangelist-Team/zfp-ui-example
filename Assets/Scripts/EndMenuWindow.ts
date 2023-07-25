import { SceneManager } from 'UnityEngine.SceneManagement';
import { Button } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class EndMenuWindow extends ZepetoScriptBehaviour {
    public ReplayButton : Button;
    Start() {    
        this.ReplayButton.onClick.AddListener(() => {this.RestartGame()});
    }

    public ShowWindow() {
        this.gameObject.SetActive(true);
    }

    public HideWindow() {
        this.gameObject.SetActive(false);
    }

    public RestartGame() {
        SceneManager.LoadScene("Main");
    }

}