const FullScreenDialogWindow = ({
    props: [ "__title", "__text" ],
    data: function () {
      return {
        dialog: false
      }
    },
    template: `
    <v-layout row justify-left>
      <v-btn  icon ripple
              class = "transparent"
              @click.native.stop = "dialog = true">
            <v-icon> description </v-icon>
      </v-btn>

      <v-dialog   v-model = "dialog"  fullscreen
                  dark class = "secondary"
                  transition = "dialog-bottom-transition">
          <v-card  class = "secondary">
            <v-toolbar class = "accent"
                       style = "flex: 0 0 auto; position: fixed; top: 0; z-index: 100;"
                       dark>
              <v-btn  icon dark class = "transparent"
                      @click.native = "dialog = false">
                <v-icon> close </v-icon>
              </v-btn>
              <v-toolbar-title>{{ __title }}</v-toolbar-title>
              <v-spacer></v-spacer>

          </v-toolbar>
          <v-layout class = "columns">
            <v-flex xs12 sm10 md8 lg6 mx-auto>
              <v-card-text class = "columns"
                       style = "padding-top: 80px;"
                       v-html = "__text">
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </v-layout>
    `,
  mounted: function () {
    
  }
})
