![](./home_logoooo.png)

# Lucky draw

This dice rolling app is created for HKIAPS, CUHK lucky draw event. Hidden keys are created for extra fun. Demo [here](https://fdq09eca.github.io/hkiaps_lucky_draw/).

## Usage

To roll the dice, do one of the followings:

1. <kbd>Click</kbd> the `Roll` button.
2. _Press and hold_ <kbd>Enter</kbd> to the `Roll` button, release upon request.

## Hidden keys

Hit the following key for respective audio.

|              Audio               |       Key        |
| :------------------------------: | :--------------: |
|          Mario victory           | <kbd>Ctrl</kdb>  |
|             Miss HK              |  <kbd>Alt</kbd>  |
|  Mark Six <sup>[1](#bgm)</sup>   | <kbd>Space</kbd> |
| Stop audio <sup>[2](#stop)</sup> |  <kbd>Esc</kbd>  |

## Further development ideas

1. Make number of die to be optional (1, 2, 3...)
2. show prize upon result. (i.e. Dictionary and decision function)
3. arrow keys for volume control
4. smoother animation: once `roll button` is clicked, call `Roll function` once per sec until next click. (i.e. `if (a) do {b} while (c)`)

---

<a class="anchor" id="bgm"></a>1: It is background music. If it is activated, it loops forever. It ends unless the tab is killed.

<a class="anchor" id="stop"></a>2: It stops audio tracks other than background music.
