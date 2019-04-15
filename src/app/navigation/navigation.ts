import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'harvest',
                title    : 'Harvester',
                translate: 'NAV.HARVEST.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/harvest',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'repository',
                title    : 'Repositorio',
                translate: 'NAV.REPOSITORY.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/repository'
            }
        ]
    }
];
