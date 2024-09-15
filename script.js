function showTab(tabName) {
    // Sélectionner toutes les sections d'onglets
    let tabContents = document.querySelectorAll('.tab-content');
    
    // Cacher toutes les sections d'onglets
    tabContents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Afficher le contenu de l'onglet sélectionné
    document.getElementById(tabName).classList.add('active');

    // Gérer les boutons actifs
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Activer le bouton sélectionné
    event.currentTarget.classList.add('active');
}
