<template>
  <article class="text-block" data-text-block>
    <h2 class="text-block__title">{{ article.title}}</h2>
    <p  class="text-block__text"
        v-for="(paragraph, index) in article.text" :key="index">
      {{paragraph.paragraph}}
    </p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: 'Amet',
        text: [
          {
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae elit nec nibh aliquet luctus. Nullam mollis velit purus, id rhoncus risus semper a. Nunc at libero vel risus sollicitudin elementum id non sem. Nulla lacus leo, mollis sit amet elit sit amet, scelerisque ullamcorper magna. Vivamus facilisis eros in mauris venenatis, id porta est dictum. Suspendisse porttitor quam vel mi consectetur, vitae maximus leo congue. Quisque quis bibendum dui. Quisque facilisis, elit id molestie tincidunt, quam sem mattis est, quis pharetra arcu turpis sed tellus.',
          },
          {
            paragraph: 'Phasellus fringilla convallis molestie. Etiam eleifend finibus elit, in sollicitudin nunc. Maecenas rutrum dui enim, sed mollis mauris auctor eu. Aenean quis tortor egestas arcu pretium dictum. Quisque ultrices porttitor posuere. Donec luctus iaculis bibendum. Nunc vel arcu mauris. Duis blandit posuere cursus. Pellentesque maximus, mi a consectetur consectetur, ipsum diam tincidunt massa, et convallis ligula leo eu lorem. Aenean finibus diam vel ipsum ornare dictum. Ut interdum ipsum eu semper sagittis.',
          },
          {
            paragraph: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur sed volutpat neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eleifend turpis ac urna elementum egestas. Phasellus a dui lectus. Aliquam lobortis metus at lectus auctor, in convallis diam tincidunt. Integer ultricies non ex quis faucibus. Phasellus elementum sollicitudin porttitor. Aenean vestibulum eget ligula quis iaculis. Nullam rhoncus ex a vestibulum lacinia. Nullam porttitor ligula ultricies mauris molestie semper. Sed id risus tempus, ornare nibh eget, suscipit enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi pellentesque libero ipsum, a porttitor nulla euismod nec. Duis gravida eros vitae arcu consequat, rhoncus dapibus turpis fermentum.',
          },
          {
            paragraph: 'Integer sit amet nisi magna. Morbi fringilla posuere mauris, a maximus dolor maximus eget. Morbi lacinia, purus eu placerat sodales, purus nisl interdum massa, sit amet condimentum velit urna non elit. Vivamus commodo ligula vel sem ullamcorper, sit amet porta diam laoreet. Praesent laoreet convallis lorem eu tristique. Praesent placerat vitae leo in fermentum. Cras faucibus rhoncus nisi, ut ultrices libero rutrum vitae. Pellentesque mi felis, venenatis sed sapien sit amet, efficitur dignissim dui. Donec felis leo, rutrum vel congue et, vulputate eu magna. Etiam in leo faucibus turpis dictum suscipit vitae eget libero. Vestibulum ex nulla, fringilla a sodales sed, porta non lorem. Nunc vel metus sollicitudin, iaculis ante in, ultrices risus. Aliquam placerat aliquam sem, in tempus urna elementum a.'
          },
          {
            paragraph: 'Sed dapibus sodales magna sit amet sollicitudin. Nam tristique ligula at arcu tempus, vel rutrum sapien tincidunt. Vestibulum vulputate tortor nec lacus laoreet, eget suscipit mi blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut condimentum ac velit id porttitor. Curabitur fringilla sagittis rhoncus. Aliquam at dui sed urna aliquam faucibus. Suspendisse dapibus euismod sem, in rhoncus tortor ornare non. Donec vitae volutpat dui. Vestibulum eget elementum neque. Nulla vitae libero nec ligula vestibulum aliquam. Donec posuere, massa sit amet efficitur tristique, diam ligula lobortis mauris, sit amet suscipit velit nulla id metus.'
          },
          {
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae elit nec nibh aliquet luctus. Nullam mollis velit purus, id rhoncus risus semper a. Nunc at libero vel risus sollicitudin elementum id non sem. Nulla lacus leo, mollis sit amet elit sit amet, scelerisque ullamcorper magna. Vivamus facilisis eros in mauris venenatis, id porta est dictum. Suspendisse porttitor quam vel mi consectetur, vitae maximus leo congue. Quisque quis bibendum dui. Quisque facilisis, elit id molestie tincidunt, quam sem mattis est, quis pharetra arcu turpis sed tellus.',
          },
          {
            paragraph: 'Phasellus fringilla convallis molestie. Etiam eleifend finibus elit, in sollicitudin nunc. Maecenas rutrum dui enim, sed mollis mauris auctor eu. Aenean quis tortor egestas arcu pretium dictum. Quisque ultrices porttitor posuere. Donec luctus iaculis bibendum. Nunc vel arcu mauris. Duis blandit posuere cursus. Pellentesque maximus, mi a consectetur consectetur, ipsum diam tincidunt massa, et convallis ligula leo eu lorem. Aenean finibus diam vel ipsum ornare dictum. Ut interdum ipsum eu semper sagittis.',
          },
          {
            paragraph: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur sed volutpat neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eleifend turpis ac urna elementum egestas. Phasellus a dui lectus. Aliquam lobortis metus at lectus auctor, in convallis diam tincidunt. Integer ultricies non ex quis faucibus. Phasellus elementum sollicitudin porttitor. Aenean vestibulum eget ligula quis iaculis. Nullam rhoncus ex a vestibulum lacinia. Nullam porttitor ligula ultricies mauris molestie semper. Sed id risus tempus, ornare nibh eget, suscipit enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi pellentesque libero ipsum, a porttitor nulla euismod nec. Duis gravida eros vitae arcu consequat, rhoncus dapibus turpis fermentum.',
          },{
            paragraph: 'Sed dapibus sodales magna sit amet sollicitudin. Nam tristique ligula at arcu tempus, vel rutrum sapien tincidunt. Vestibulum vulputate tortor nec lacus laoreet, eget suscipit mi blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut condimentum ac velit id porttitor. Curabitur fringilla sagittis rhoncus. Aliquam at dui sed urna aliquam faucibus. Suspendisse dapibus euismod sem, in rhoncus tortor ornare non. Donec vitae volutpat dui. Vestibulum eget elementum neque. Nulla vitae libero nec ligula vestibulum aliquam. Donec posuere, massa sit amet efficitur tristique, diam ligula lobortis mauris, sit amet suscipit velit nulla id metus.'
          },
          {
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae elit nec nibh aliquet luctus. Nullam mollis velit purus, id rhoncus risus semper a. Nunc at libero vel risus sollicitudin elementum id non sem. Nulla lacus leo, mollis sit amet elit sit amet, scelerisque ullamcorper magna. Vivamus facilisis eros in mauris venenatis, id porta est dictum. Suspendisse porttitor quam vel mi consectetur, vitae maximus leo congue. Quisque quis bibendum dui. Quisque facilisis, elit id molestie tincidunt, quam sem mattis est, quis pharetra arcu turpis sed tellus.',
          },
          {
            paragraph: 'Phasellus fringilla convallis molestie. Etiam eleifend finibus elit, in sollicitudin nunc. Maecenas rutrum dui enim, sed mollis mauris auctor eu. Aenean quis tortor egestas arcu pretium dictum. Quisque ultrices porttitor posuere. Donec luctus iaculis bibendum. Nunc vel arcu mauris. Duis blandit posuere cursus. Pellentesque maximus, mi a consectetur consectetur, ipsum diam tincidunt massa, et convallis ligula leo eu lorem. Aenean finibus diam vel ipsum ornare dictum. Ut interdum ipsum eu semper sagittis.',
          },
          {
            paragraph: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur sed volutpat neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla eleifend turpis ac urna elementum egestas. Phasellus a dui lectus. Aliquam lobortis metus at lectus auctor, in convallis diam tincidunt. Integer ultricies non ex quis faucibus. Phasellus elementum sollicitudin porttitor. Aenean vestibulum eget ligula quis iaculis. Nullam rhoncus ex a vestibulum lacinia. Nullam porttitor ligula ultricies mauris molestie semper. Sed id risus tempus, ornare nibh eget, suscipit enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi pellentesque libero ipsum, a porttitor nulla euismod nec. Duis gravida eros vitae arcu consequat, rhoncus dapibus turpis fermentum.',
          },
        ]
      },
    }
  },
}
</script>
