<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Policy Info
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">
            FAR Details
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3">
            Audit Data
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 4" step="4">
            Financial Info
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 5" step="5">
            Documents
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 6" step="6"> Claim </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 7" step="7"> Log </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 8" step="8">
            AutoSync RawData
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1" class="steppercontent_1">
            <v-card class="mb-12" color="white" height="100%">
              <div class="font-weight-black policy_info ps-5">POLICY INFO</div>
              <div class="d-flex justify-end mb-6 me-2">
                <v-btn class="next2" @click="e1 = 2" color="primary"
                  >Next</v-btn
                >
                <v-btn class="back2" @click="goBack()" color="secondary"
                  >Back
                </v-btn>
                <v-btn class="save2" color="warning"> Save </v-btn>
              </div>
              <div>
                <v-expansion-panels class="ps-2 pe-2">
                  <v-expansion-panel>
                    <v-expansion-panel-header class="font-weight-black">
                      Policy Owner Details
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-container>
                        <v-data-table
                          :headers="headers"
                          :items="desserts"
                          :items-per-page="5"
                          class="elevation-1"
                        ></v-data-table>
                      </v-container>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>

              <v-container> </v-container>
              <div class="e_pannal_2">
                <v-expansion-panels class="ps-2 pe-2">
                  <v-expansion-panel>
                    <v-expansion-panel-header class="font-weight-black">
                      Life Insured Details
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="5"
                        class="elevation-1"
                      ></v-data-table>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
              <v-container></v-container>
              <div>
                <v-expansion-panels class="ps-2 pe-2">
                  <v-expansion-panel class="mb-5">
                    <v-expansion-panel-header class="font-weight-black">
                      Policy Details
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <hr />
                      <v-container></v-container>
                      <v-expansion-panels>
                        <v-expansion-panel>
                          <v-expansion-panel-header class="font-weight-medium">
                            Basic Policy

                            <div class="d-flex justify-end">
                              <template>
                                <v-dialog
                                  v-model="dialog"
                                  persistent
                                  max-width="100%"
                                  max-height="100%"
                                >
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                      rounded
                                      x-small
                                      color="primary"
                                      dark
                                      v-bind="attrs"
                                      v-on="on"
                                    >
                                      Add Rider
                                    </v-btn>
                                  </template>
                                  <v-card>
                                    <v-card-title>
                                      <span class="font-weight-black"
                                        >Attachable Rider (Enhanced IncomeShield
                                        Preferred)</span
                                      >
                                    </v-card-title>
                                    <hr color="grey" />
                                    <v-card-text>
                                      <v-container>
                                        <v-row>
                                          <v-col cols="12" sm="6">
                                            <v-autocomplete
                                              :items="[
                                                'Skiing',
                                                'Ice hockey',
                                                'Soccer',
                                                'Basketball',
                                                'Hockey',
                                                'Reading',
                                                'Writing',
                                                'Coding',
                                                'Basejump',
                                              ]"
                                              label="Life Insured"
                                              outlined
                                            ></v-autocomplete>
                                          </v-col>
                                          <v-col cols="12" sm="6">
                                            <v-text-field
                                              label="Search"
                                              outlined
                                            ></v-text-field>
                                          </v-col>
                                        </v-row>
                                      </v-container>
                                      <v-container>
                                        <template>
                                          <v-data-table
                                            :headers="headers"
                                            :items="desserts"
                                            :items-per-page="5"
                                            class="elevation-1"
                                          ></v-data-table>
                                        </template>
                                      </v-container>
                                    </v-card-text>
                                    <hr color="grey" />
                                    <v-card-actions>
                                      <v-spacer></v-spacer>
                                      <v-btn
                                        color="primary"
                                        @click="dialog = false"
                                      >
                                        Cancel
                                      </v-btn>
                                      <v-btn
                                        color="warning"
                                        @click="dialog = false"
                                      >
                                        Add Rider
                                      </v-btn>
                                    </v-card-actions>
                                  </v-card>
                                </v-dialog>
                              </template>
                            </div>
                          </v-expansion-panel-header>

                          <v-form>
                            <v-expansion-panel-content>
                              <template>
                                <v-container fluid>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Writing FAR"
                                        dense
                                        :disabled="disabled"
                                        @input="check"
                                      ></v-select>

                                      <v-btn
                                        x-small
                                        class="mx-2"
                                        fab
                                        dark
                                        color="primary"
                                        @click="disabled = !disabled"
                                        v-model="writingfar"
                                      >
                                        <v-icon> mdi-pencil </v-icon>
                                      </v-btn>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Servicing FAR"
                                        dense
                                        v-model="servicingfar"
                                        disabled
                                      ></v-text-field>
                                    </v-col>

                                    <v-col cols="8" sm="6" md="2">
                                      <v-radio-group v-model="row" row>
                                        <template v-slot:label>
                                          <div>
                                            <strong>Backdated :</strong>
                                          </div>
                                        </template>

                                        <v-radio value="Yes">
                                          <template v-slot:label>
                                            <div>
                                              <strong>Yes</strong>
                                            </div>
                                          </template>
                                        </v-radio>
                                        <v-radio value="No">
                                          <template v-slot:label>
                                            <div>
                                              <strong>No</strong>
                                            </div>
                                          </template>
                                        </v-radio>
                                      </v-radio-group>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_lifeinsured"
                                        label="Life Insured"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Policy Number"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        v-model="menu_inforce"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date_inforce"
                                            label="Inforce Date"
                                            aria-placeholder="Inforce Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date_inforce"
                                          @input="menu_inforce = false"
                                        ></v-date-picker>
                                      </v-menu>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        v-model="menu_commencement"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date_commencement"
                                            label="Commencement Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date_commencement"
                                          @input="menu_commencement = false"
                                        ></v-date-picker>
                                      </v-menu>
                                    </v-col>

                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_policystatus"
                                        label="Policy Status"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_businessstatus"
                                        label="Business Status"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        v-model="menu_application"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date_application"
                                            label="Application Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date_application"
                                          @input="menu_application = false"
                                        ></v-date-picker>
                                      </v-menu>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        v-model="menu_submission"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date_submission"
                                            label="Submisssion Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date_submission"
                                          @input="menu_submission = false"
                                        ></v-date-picker>
                                      </v-menu>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        v-model="menu_registration"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date_registration"
                                            label="Registration Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date_registration"
                                          @input="menu_registration = false"
                                        ></v-date-picker>
                                      </v-menu>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_preferredcompanyname"
                                        label="Preferred Company Name"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_insuredbi"
                                        label="Product Name (Insurer BI)"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Product Name (Insurer Policy)"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_basicproductname"
                                        label="Basic Product Name (Autosync)"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_producttypefa"
                                        label="Product Name (FA)"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_producttypefa"
                                        label="Product Type (FA)"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_productsubtypefa"
                                        label="Product Sub Type (FA)"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Issue Age"
                                        value="29"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        v-model="menu_status"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date_status"
                                            label="Status Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date_status"
                                          @input="menu_status = false"
                                        ></v-date-picker>
                                      </v-menu>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Sum Assured / Benefit"
                                        value="2000"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Policy Term"
                                        value="70"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        v-model="menu_policy"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date_policy"
                                            label="Policy End Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date_policy"
                                          @input="menu_policy = false"
                                        ></v-date-picker>
                                      </v-menu>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_paymentmethod"
                                        label="Payment Method"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Premium Term"
                                        value="70"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        v-model="menu_premium"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date_premium"
                                            label="Premium End Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date_premium"
                                          @input="menu_premium = false"
                                        ></v-date-picker>
                                      </v-menu>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_frequency"
                                        label="Frequency"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_currency"
                                        label="Currency"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Exchange Rate"
                                        value="1"
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Basic Premium(Original)"
                                        value="100000.00"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Basic Premium (SGD)"
                                        value="100000.00"
                                        disabled
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Loading Premium (Original)"
                                        value="0.00"
                                        disabled
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Loading Premium (SGD)"
                                        value="0.00"
                                        disabled
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Discounted Premium (Original)"
                                        value="0.00"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Discounted Premium (SGD)"
                                        value="0.00"
                                        disabled
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="GST (SGD)"
                                        value="6542.06"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Basic Modal Premium"
                                        value="93457.94"
                                        disabled
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Basic Total Premium (SGD)"
                                        value="100000.00"
                                        disabled
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Basic Shield Plan Premium"
                                        value="0.00"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Total Modal Premium (Basic + All Rider)"
                                        value="93457.94"
                                        disabled
                                        outlined
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Total Premium (Basic + All Rider)(SGD)"
                                        value="100000.00"
                                        disabled
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_referencenumber"
                                        label="Reference Number"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_upgrade"
                                        label="Upgrade / Downgrade"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items_rider"
                                        label="Add Rider"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-textarea
                                        outlined
                                        name="input-7-4"
                                        label="Case Note"
                                        value=""
                                      ></v-textarea>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </template> </v-expansion-panel-content
                          ></v-form>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </v-card>
            <div class="d-flex justify-end me-2">
              <v-btn class="next1" color="primary" @click="e1 = 2">Next</v-btn>

              <v-btn class="back1" color="secondary"> Back </v-btn>
              <v-btn class="save1" color="warning"> Save </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 3">Next</v-btn>

            <v-btn color="secondary" @click="goBack()">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card class="mb-12" color="grey lighten-1" height="200px"
              ><h1>hello</h1></v-card
            >

            <v-btn color="primary" @click="e1 = 4">Next </v-btn>

            <v-btn color="secondary" @click="goBack()">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 5"> Next </v-btn>

            <v-btn color="secondary" @click="goBack()">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>
          <v-stepper-content step="5">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 6"> Next </v-btn>

            <v-btn color="secondary" @click="goBack()">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>
          <v-stepper-content step="6">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 7"> Next </v-btn>

            <v-btn color="secondary" @click="goBack()">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>

          <v-stepper-content step="7">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 8"> Next </v-btn>

            <v-btn color="secondary" @click="goBack()">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>
          <v-stepper-content step="8">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 8"> Next </v-btn>

            <v-btn color="secondary" @click="goBack()">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      dialog: false,
      e1: 1,
      column: null,
      row: null,
      date_inforce: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu_inforce: false,
      date_commencement: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      menu_commencement: false,
      date_application: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      menu_application: false,
      date_submission: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      menu_submission: false,
      date_registration: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      menu_registration: false,
      date_status: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu_status: false,
      date_policy: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu_policy: false,
      date_premium: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      menu_premium: false,
      items: ["8000 - Financial Alliance Pte Ltd - Active", "gayt", "vaknjn"],
      writingfar: "",
      servicingfar: "",

      disabled: true,
      items_writing: ["dinesh kumar j"],
      items_servicing: [""],
      items_policystatus: ["Registered", "Not Registered"],
      items_lifeinsured: ["Betty", "Dinesh Kumar J"],
      items_businessstatus: ["Yes"],
      items_preferredcompanyname: ["NTUC INCOME"],
      items_insuredbi: ["--Product Name (Insurer BI) --"],
      items_insurerpolicy: ["--Product Name (Insurer Policy)--"],
      items_basicproductname: ["Select an Option"],
      item_productnamefa: ["Enhanced IncomeShield Preferred"],
      items_producttypefa: ["H & S - IP Main Plan"],
      items_productsubtypefa: ["H & S - IP Main Plan"],
      items_paymentmethod: ["Cash/Casier Order/Money Order"],
      items_frequency: ["yearly"],
      items_currency: ["SGD", "INR", "USD", "EURO", "YEN"],
      items_referencenumber: ["FCA202109300001"],
      items_upgrade: ["No", "Yes"],
      items_rider: ["No", "Yes"],
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.e1--;
      console.log(this.e1);
      if (this.e1 == 0) {
        this.e1 = 1;
      }
    },
    check(event) {
      this.writingfar = event;
      this.disabled = true;
      //  var data=event.split('-')[0]
      this.servicingfar = event;
    },
  },
};
</script>
<style>
.back1 {
  margin-left: 1%;
}
.save1 {
  margin-left: 1%;
}
.policy_info {
  color: rgb(103 58 183);
}
.back2 {
  margin-left: 1%;
}
.save2 {
  margin-left: 1%;
}
.steppercontent_1 {
  background-color: #f3f3f4;
}
</style>
