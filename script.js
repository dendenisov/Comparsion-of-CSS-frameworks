const link = document.querySelector('link')

        link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'

document.querySelector('select').addEventListener('change', function () {

            switch (this.value) {
                case 'bulma':
                    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css'
                    break;
                case 'foundation':
                    link.href =
                        'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css'
                    break;
                case 'semantic':
                    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css'
                    break;
                case 'skeleton':
                    link.href =
                        'https://cdnjs.cloudflare.com/ajax/libs/skeleton-framework/1.1.1/skeleton.min.css'
                    break;
                case 'tailwind':
                    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.5.2/tailwind.min.css'
                    break;
                case 'uikit':
                    link.href = 'https://cdn.jsdelivr.net/npm/uikit@3.5.5/dist/css/uikit.min.css'
                    break;
                case 'pure':
                    link.href = 'https://unpkg.com/purecss@2.0.3/build/pure-min.css'
                    break;
                case 'milligram':
                    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.0/milligram.css'
                    break;
                case 'spectre':
                    link.href = 'https://unpkg.com/spectre.css/dist/spectre.min.css'
                    break;
                case 'base':
                    link.href = 'https://unpkg.com/@getbase/base/core.css'
                    break;
                case 'picnic':
                    link.href = 'https://cdn.jsdelivr.net/npm/picnic'
                    break;
                default:
                    break;
            }
        })