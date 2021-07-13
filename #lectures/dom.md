# DOM (Document Object Model) #

![DOM](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png)

## = = = = = Find Object = = = = = ##

* document.children[0].children[0] === document.head
* document.children[0].children[1] === document.body

Method | Finds by | Returns | Searches inside element? | Live collection?
------ | -------- | ------- | ------------------------ | ----------------
querySelector | Any CSS-selector | One obj | Yes | No
querySelectorAll | Any CSS-selector | Obj Collection | Yes | No
getElementById | id | Onbe object | No | No
getElementByTagName | tag or * | Obj collection | Yes | Yes
getElementByClassName | class name | Obj collection | Yes | Yes
getElementByName | name | Obj collection | No | Yes

## = = = = = Change content = = = = = ##
* .outerHTML --> shows this tag and all nodes it contains
* .textContent --> parsing like str + gets `<script>` & `<style>` 
* .innerHTML  --> can input hmtl & text
* .innerText

## = = = = = Attributes = = = = = ##
* .hasAttribute()
* .attributes --> get all attributes
* .getAttribute('id')
* .setAttribute('')
* .removeAttribute()

## = = = = = Elements = = = = = ##

.cloneNode(true/false) deep/shallow
.insertAdjacentHTML(beforebegin\afterbegin\beforend\afterend, newElement)

### New ###
* .append
* .before
* .after
* .remove
* .replaceWith

- [x] works with several object
- [x] can append string
- [x] returns undefined

### Old ###
* .appendChild
* .insertBefore
* .replaceChild
* .removeChild

## = = = = = Useful = = = = = ##
.tagName --> gets tag name in upper case