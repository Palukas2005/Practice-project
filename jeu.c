#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    int nombreMystère, nombreJoueur, essais = 0;
    int min = 1, max=100;

    srand(time(NULL));
    nombreMystère = (rand()%(max - min +1))+min;

    printf("Bienvenue dans le jeu du nombre mystere !\n");
    printf("Devinez le nombre entre %d et %d.\n", min, max);
    
    do{
        printf ("Votre proposition espèce d'enculé ! : ");
        scanf ("%d", &nombreJoueur);
        essais++;
        if (nombreJoueur < 1 || nombreJoueur > 100){
            printf("Hey oh ! Reste dans les limites du jeu entre %d et %d espece de bouffon !\n", min, max);
        }
        else if(nombreJoueur < nombreMystère){
            printf("Le nombre est plus grand petit merdeux !\n");
        }
        else if (nombreJoueur > nombreMystère){
            printf("C'est plus petit BORDEL !!\n");
        }
        else{
            printf("Bien joué boufon tu as ruiné quelques secondes de ta vie pour trouvé un putain de nombre en %d essais.\n", essais);
        } 
        
    }while(nombreJoueur != nombreMystère);
    return 0;
}