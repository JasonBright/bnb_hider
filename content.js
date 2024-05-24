
function addToggleButton() {
    const toolbar = document.querySelector('div.ca8a17a');
    if (toolbar && !toolbar.querySelector('.show-hidden-toggle')) {
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'pgdo31e atm_bb_idpfg4 atm_lk_exct8b dir dir-ltr show-hidden-toggle';

        const innerDiv = document.createElement('div');
        innerDiv.className = 'c1yo0219 atm_9s_1txwivl_vmtskl atm_92_1yyfdc7_vmtskl atm_9s_1txwivl_9in345 atm_92_1yyfdc7_9in345 dir dir-ltr';

        const displayDiv = document.createElement('div');
        displayDiv.style.display = 'contents';
        displayDiv.setAttribute('data-reactroot', '');

        const switchDiv = document.createElement('div');
        switchDiv.className = 'c4g05it atm_9s_1txwivl atm_h_1h6ojuz atm_cx_ftgil2 atm_5j_1fwxnve atm_4b_1oqmvsg atm_6h_t94yts atm_66_nqa18y atm_l8_1uuuo7i atm_j6_fyhuej atm_9j_tlke0l atm_2d_116dmco_1nos8r_uv4tnr atm_4b_dezgoh_1nos8r_uv4tnr dir dir-ltr';

        const textContainer = document.createElement('div');
        textContainer.className = 'tjrryoo atm_ax_kb7nvz dir dir-ltr';
        textContainer.id = 'show-hidden-text-container';

        const textDiv = document.createElement('div');
        textDiv.className = 'txqi15w atm_c8_1uc0753 atm_g3_lonqig atm_fr_r7vles atm_cs_9dzvea dir dir-ltr';
        textDiv.textContent = 'Show Hidden';

        textContainer.appendChild(textDiv);

        const button = document.createElement('button');
        button.setAttribute('aria-checked', 'false');
        button.setAttribute('aria-labelledby', 'show-hidden-text-container');
        button.setAttribute('role', 'switch');
        button.setAttribute('type', 'button');
        button.className = 'c1pmjrqe atm_5j_1vi7ecw atm_66_nqa18y atm_6h_t94yts atm_9j_tlke0l atm_mk_h2mmj6 atm_kd_glywfm atm_jb_14noui3 atm_vy_14noui3 atm_e2_p5ox87 atm_9j_13gfvf7_1o5j5ji atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_uc_aaiy6o_1w3cfyq atm_70_j7h7jn_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_j7h7jn_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam c472klm atm_2d_1en9qhd atm_4b_1en9qhd atm_2d_1vvgs7l_1o5j5ji atm_4b_1vvgs7l_1o5j5ji atm_4b_1vvgs7l_itk5vk atm_2d_16fcrbu_1astpmt atm_4b_16fcrbu_1astpmt atm_4b_16fcrbu_aast5o dir dir-ltr';

        const switchDivInner = document.createElement('div');
        switchDivInner.className = 's1yktc2s atm_5j_1ssbidh atm_66_nqa18y atm_fq_1n1ank9 atm_mk_stnw88 atm_tk_1n1ank9 atm_2d_1qwqy05 atm_9s_1txwivl atm_h_1h6ojuz atm_fc_1h6ojuz atm_6h_yh40bf atm_uc_5cp38c atm_e2_p5ox87 atm_vy_p5ox87 atm_uc_glywfm__1rrf6b5 atm_4b_1k0ymf0_1o5j5ji atm_7l_9vytuy_1o5j5ji s1aked77 atm_4b_1en9qhd dir dir-ltr';

        button.appendChild(switchDivInner);

        switchDiv.appendChild(textContainer);
        switchDiv.appendChild(button);

        displayDiv.appendChild(switchDiv);
        innerDiv.appendChild(displayDiv);
        toggleContainer.appendChild(innerDiv);
        toolbar.appendChild(toggleContainer);

        button.addEventListener('click', () => {
            const isChecked = button.getAttribute('aria-checked') === 'true';
            button.setAttribute('aria-checked', !isChecked);

            if (isChecked) {
                button.className = 'c1pmjrqe atm_5j_1vi7ecw atm_66_nqa18y atm_6h_t94yts atm_9j_tlke0l atm_mk_h2mmj6 atm_kd_glywfm atm_jb_14noui3 atm_vy_14noui3 atm_e2_p5ox87 atm_9j_13gfvf7_1o5j5ji atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_uc_aaiy6o_1w3cfyq atm_70_j7h7jn_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_j7h7jn_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam c472klm atm_2d_1en9qhd atm_4b_1en9qhd atm_2d_1vvgs7l_1o5j5ji atm_4b_1vvgs7l_1o5j5ji atm_4b_1vvgs7l_itk5vk atm_2d_16fcrbu_1astpmt atm_4b_16fcrbu_1astpmt atm_4b_16fcrbu_aast5o dir dir-ltr';
                switchDivInner.className = 's1yktc2s atm_5j_1ssbidh atm_66_nqa18y atm_fq_1n1ank9 atm_mk_stnw88 atm_tk_1n1ank9 atm_2d_1qwqy05 atm_9s_1txwivl atm_h_1h6ojuz atm_fc_1h6ojuz atm_6h_yh40bf atm_uc_5cp38c atm_e2_p5ox87 atm_vy_p5ox87 atm_uc_glywfm__1rrf6b5 atm_4b_1k0ymf0_1o5j5ji atm_7l_9vytuy_1o5j5ji s1aked77 atm_4b_1en9qhd dir dir-ltr';
            } else {
                button.className = 'c1pmjrqe atm_5j_1vi7ecw atm_66_nqa18y atm_6h_t94yts atm_9j_tlke0l atm_mk_h2mmj6 atm_kd_glywfm atm_jb_14noui3 atm_vy_14noui3 atm_e2_p5ox87 atm_9j_13gfvf7_1o5j5ji atm_3f_glywfm_jo46a5 atm_l8_idpfg4_jo46a5 atm_gi_idpfg4_jo46a5 atm_3f_glywfm_1icshfk atm_kd_glywfm_19774hq atm_uc_aaiy6o_1w3cfyq atm_70_j7h7jn_1w3cfyq atm_uc_glywfm_1w3cfyq_1rrf6b5 atm_uc_aaiy6o_pfnrn2_1oszvuo atm_70_j7h7jn_pfnrn2_1oszvuo atm_uc_glywfm_pfnrn2_1o31aam cgjovh9 atm_2d_1qnzqti atm_4b_1qnzqti atm_2d_1k0ymf0_1o5j5ji atm_4b_1k0ymf0_1o5j5ji atm_4b_1k0ymf0_itk5vk dir dir-ltr';
                switchDivInner.className = 's1yktc2s atm_5j_1ssbidh atm_66_nqa18y atm_fq_1n1ank9 atm_mk_stnw88 atm_tk_1n1ank9 atm_2d_1qwqy05 atm_9s_1txwivl atm_h_1h6ojuz atm_fc_1h6ojuz atm_6h_yh40bf atm_uc_5cp38c atm_e2_p5ox87 atm_vy_p5ox87 atm_uc_glywfm__1rrf6b5 atm_4b_1k0ymf0_1o5j5ji atm_7l_9vytuy_1o5j5ji s16dvoaf atm_4b_1qnzqti atm_7l_jt7fhx atm_tr_1oj03c8 dir dir-ltr';
            }

            toggleHiddenListings(!isChecked);
        });
    }
}



function toggleHiddenListings(show) {
    chrome.storage.sync.get('viewedListings', (data) => {
        const viewedListings = data.viewedListings || [];
        document.querySelectorAll('span[class^="t5u4927"]').forEach((span) => {
            const parentDiv = span.closest('div[style*="display: flex"]');
            const parentButton = parentDiv.closest('button.czgw0k9');
            const listingTitle = span.textContent;
            const listingId = extractListingId(listingTitle);
            if (parentButton && listingId && viewedListings.includes(listingId)) {
                parentButton.style.display = show ? 'block' : 'none';
            }
        });
    });
}

function addHideButtons() {
    document.querySelectorAll('span[class^="t5u4927"]').forEach((span) => {
        const parentDiv = span.closest('div[style*="display: flex"]');
        const parentButton = parentDiv.closest('button.czgw0k9');
        if (parentDiv && !parentDiv.querySelector('button.hide-button')) {
            const hideButton = document.createElement('button');
            hideButton.textContent = '×';
            hideButton.className = 'hide-button';
            hideButton.style.marginLeft = '7px';
            hideButton.style.cursor = 'pointer';
            hideButton.style.background = 'red';
            hideButton.style.color = 'white';
            hideButton.style.border = 'none';
            hideButton.style.padding = '0px 0px 2px 0px';
            hideButton.style.fontSize = '26px';
            hideButton.style.borderRadius = '0.25rem';

            hideButton.addEventListener('click', () => {
                const listingTitle = span.textContent;
                const listingId = extractListingId(listingTitle);
                console.log("hide with id" + listingId);
                if (listingId) {
                    chrome.runtime.sendMessage({ action: "markAsViewed", listingId }, (response) => {
                        if (response.success && parentButton) {
                            parentButton.style.display = 'none';
                        }
                    });
                }
            });

            span.appendChild(hideButton);
        }
    });
}

function extractListingId(listingTitle) {
    // Разделяем listingTitle на title и price
    const [title, priceWithExtras] = listingTitle.split(', $');
    const price = priceWithExtras.split('$')[0].trim(); // Извлекаем только первую часть цены без добавок

    // Ищем все карточные контейнеры
    const cardContainers = document.querySelectorAll('div[data-testid="card-container"]');

    for (let cardContainer of cardContainers) {
        // Ищем элемент с названием
        const titleElement = cardContainer.querySelector('div[data-testid="listing-card-title"]');
        // Ищем элемент с ценой
        const priceElement = cardContainer.querySelector('span._1y74zjx');

        if (titleElement && priceElement) {
            const cardTitle = titleElement.textContent.trim();
            const cardPrice = priceElement.textContent.replace('$', '').trim();

            // Сравниваем значения с разделенными значениями из listingTitle
            if (cardTitle === title.trim() && cardPrice === price) {
                // Извлекаем ID из атрибута aria-labelledby
                const parentDiv = titleElement.closest('div[aria-labelledby^="title_"]');
                if (parentDiv) {
                    const ariaLabelledBy = parentDiv.getAttribute('aria-labelledby');
                    const roomId = ariaLabelledBy.replace('title_', '');
                    return roomId;
                }
            }
        }
    }
    return null;
}


function hideViewedListings() {
    chrome.storage.sync.get('viewedListings', (data) => {
        const viewedListings = data.viewedListings || [];
        document.querySelectorAll('span[class^="t5u4927"]').forEach((span) => {
            const parentDiv = span.closest('div[style*="display: flex"]');
            const parentButton = parentDiv.closest('button.czgw0k9');
            const listingTitle = span.textContent;
            const listingId = extractListingId(listingTitle);
            if (parentButton && listingId && viewedListings.includes(listingId)) {
                parentButton.style.display = 'none';
            }
        });
    });
}

function addRedCrossButtons() {
    document.querySelectorAll('div._1jdtwz4').forEach((div) => {
        if (!div.querySelector('button.hide-button')) {
            const hideButton = document.createElement('button');
            hideButton.textContent = '×';
            hideButton.className = 'hide-button';
            hideButton.style.marginLeft = '7px';
            hideButton.style.cursor = 'pointer';
            hideButton.style.background = 'red';
            hideButton.style.color = 'white';
            hideButton.style.border = 'none';
            hideButton.style.padding = '5px 8px 8px 8px';
            hideButton.style.fontSize = '32px';
            hideButton.style.borderRadius = '0.25rem';

            hideButton.addEventListener('click', () => {
                const url = window.location.href;
                const match = url.match(/rooms\/(\d+)/);
                if (match) {
                    const listingId = match[1];
                    chrome.runtime.sendMessage({ action: "markAsViewedAndClose", listingId }, (response) => {
                        if (response.success) {
                            div.style.display = 'none';
                        }
                    });
                }
            });

            div.appendChild(hideButton);
        }
    });
}

window.addEventListener('load', () => {
    addToggleButton();
    hideViewedListings();
    addHideButtons();

    addRedCrossButtons();
    const observer = new MutationObserver(() => {
        hideViewedListings();
        addHideButtons();
        addToggleButton();
        addRedCrossButtons();
    });
    observer.observe(document.body, { childList: true, subtree: true });
});

