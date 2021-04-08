document.addEventListener('DOMContentLoaded', () => {
    // TAGS
    const TAG_ID = 'data-photo-id';
    const TAG_PHOTO = 'foto';

    const TAG_LI = 'li';

    const TAGS_MAP = [
        {
            currentTag: TAG_LI,
            linkedTags: [TAG_PHOTO],
        },
        {
            currentTag: TAG_PHOTO,
            linkedTags: [TAG_LI],
        },
    ];

    // EVENTS
    const EVENT_MOUSE_ON = 'mouseover';
    const EVENT_MOUSE_OFF = 'mouseleave';
    const EVENT_CLICK = 'click';

    // ACTIONS
    const EVENT_ACTION_ADD = 'add';
    const EVENT_ACTION_REMOVE = 'remove';
    const EVENT_ACTION_AUTO_HADLER = 'auto-hadler';

    // CLASSES
    const EVENT_CLASS_ACTIVE = 'active';
    const EVENT_CLASS_OPEN_FOTO = 'openFoto';

    // SETTINGS
    const LISTENERS_OPTIONS_LIST = [
        {
            eventName: EVENT_MOUSE_OFF,
            eventAction: EVENT_ACTION_REMOVE,
            eventClass: EVENT_CLASS_ACTIVE,
        },
        {
            eventName: EVENT_MOUSE_ON,
            eventAction: EVENT_ACTION_ADD,
            eventClass: EVENT_CLASS_ACTIVE,
        },
        {
            eventName: EVENT_CLICK,
            eventAction: EVENT_ACTION_AUTO_HADLER,
            eventClass: EVENT_CLASS_OPEN_FOTO,
        },
    ];

    /**
     * @param eventData
     * @param element
     * @param targetElements
     */
    const setListener = (eventData, element, targetElements) =>
        element.addEventListener(eventData.eventName, (event) => {
            const elements = [element, ...targetElements];
            elements.forEach((currentElement) => {
                switch (eventData.eventAction) {
                    case EVENT_ACTION_ADD:
                        currentElement.classList.add(eventData.eventClass);
                        break;
                    case EVENT_ACTION_REMOVE:
                        currentElement.classList.remove(eventData.eventClass);
                        break;
                    // case EVENT_ACTION_AUTO_HADLER:
                    //     currentElement.classList.contains(eventData.eventClass)
                    //         ? currentElement.classList.remove(
                    //               eventData.eventClass
                    //           )
                    //         : currentElement.classList.add(
                    //               eventData.eventClass
                    //           );
                    //     break;
                    case EVENT_ACTION_AUTO_HADLER:
                        if (
                            currentElement.classList.contains(
                                eventData.eventClass
                            )
                        ) {
                            currentElement.classList.remove(
                                eventData.eventClass
                            );
                        } else {
                            const test = document.getElementsByClassName(
                                eventData.eventClass
                            );
                            for (let item of test) {
                                if (
                                    item.getAttribute(TAG_ID) !==
                                    currentElement.getAttribute(TAG_ID)
                                ) {
                                    item.classList.remove(eventData.eventClass);
                                }
                            }

                            currentElement.classList.add(eventData.eventClass);
                        }
                        break;
                }
            });
        });

    /**
     *
     * @param tag
     * @param id
     * @return {HTMLElement}
     */
    const getElementByTagId = (tag, id) =>
        document.getElementById(`${tag}-${id}`);

    TAGS_MAP.forEach((listItemTagsData) => {
        /*
         * @type {HTMLCollectionOf<Element>}
         */
        const list = document.getElementsByClassName(
            listItemTagsData.currentTag
        );
        for (let item of list) {
            const itemId = item.getAttribute(TAG_ID);
            const targetElements = listItemTagsData.linkedTags.map(
                (linkedTag) => getElementByTagId(linkedTag, itemId)
            );
            LISTENERS_OPTIONS_LIST.forEach((listerConfig) =>
                setListener(listerConfig, item, targetElements)
            );
        }
    });

    // ========== CLOSE FOTO VIA ESCAPE ==========
    const OPEN_FOTOS = document.getElementsByClassName('openFoto');
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            for (let item of OPEN_FOTOS) {
                item.classList.remove('openFoto');
            }
        }
    });
});
