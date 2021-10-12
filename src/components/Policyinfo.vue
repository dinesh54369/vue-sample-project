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
          <v-stepper-content step="1">
            <v-card class="mb-12" color="white" height="100%">
              <div class="font-weight-black policy_info">POLICY INFO</div>
              <div class="d-flex justify-end mb-6">
                <v-btn class="next2" color="primary">Next</v-btn>
                <v-btn class="back2" color="secondary">Back </v-btn>
                <v-btn class="save2" color="warning"> Save </v-btn>
              </div>
              <div>
                <v-expansion-panels>
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
                <v-expansion-panels>
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
                <v-expansion-panels>
                  <v-expansion-panel>
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
                             Add Rider
                              <v-dialog>
                                <v-card-action></v-card-action
                              ></v-dialog>
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
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Servicing FAR"
                                        dense
                                      ></v-select>
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
                                        :items="items"
                                        label="Writing FAR"
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
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="date"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date"
                                            label="Inforce Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date"
                                          no-title
                                          scrollable
                                        >
                                          <v-spacer></v-spacer>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                          >
                                            Cancel
                                          </v-btn>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                          >
                                            OK
                                          </v-btn>
                                        </v-date-picker>
                                      </v-menu>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="date"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date"
                                            label="Inforce Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date"
                                          no-title
                                          scrollable
                                        >
                                          <v-spacer></v-spacer>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                          >
                                            Cancel
                                          </v-btn>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                          >
                                            OK
                                          </v-btn>
                                        </v-date-picker>
                                      </v-menu>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Policy Status"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Business Status"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="date"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date"
                                            label="Application Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date"
                                          no-title
                                          scrollable
                                        >
                                          <v-spacer></v-spacer>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                          >
                                            Cancel
                                          </v-btn>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                          >
                                            OK
                                          </v-btn>
                                        </v-date-picker>
                                      </v-menu>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="date"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date"
                                            label="Submission Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date"
                                          no-title
                                          scrollable
                                        >
                                          <v-spacer></v-spacer>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                          >
                                            Cancel
                                          </v-btn>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                          >
                                            OK
                                          </v-btn>
                                        </v-date-picker>
                                      </v-menu>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="date"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date"
                                            label="Registration Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date"
                                          no-title
                                          scrollable
                                        >
                                          <v-spacer></v-spacer>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                          >
                                            Cancel
                                          </v-btn>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                          >
                                            OK
                                          </v-btn>
                                        </v-date-picker>
                                      </v-menu>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Preferred Company Name"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
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
                                        :items="items"
                                        label="Basic Product Name (Autosync)"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Product Name (FA)"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Product Type (FA)"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Product Sub Type (FA)"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Issue Age"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="date"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date"
                                            label="Status Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date"
                                          no-title
                                          scrollable
                                        >
                                          <v-spacer></v-spacer>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                          >
                                            Cancel
                                          </v-btn>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                          >
                                            OK
                                          </v-btn>
                                        </v-date-picker>
                                      </v-menu>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Sum Assured / Benefit"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Policy Term"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="date"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date"
                                            label="Policy End Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date"
                                          no-title
                                          scrollable
                                        >
                                          <v-spacer></v-spacer>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                          >
                                            Cancel
                                          </v-btn>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                          >
                                            OK
                                          </v-btn>
                                        </v-date-picker>
                                      </v-menu>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Payment Method"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Premium Term"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :return-value.sync="date"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date"
                                            label="Premium End Date"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date"
                                          no-title
                                          scrollable
                                        >
                                          <v-spacer></v-spacer>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                          >
                                            Cancel
                                          </v-btn>
                                          <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                          >
                                            OK
                                          </v-btn>
                                        </v-date-picker>
                                      </v-menu>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Frequency"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Currency"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Exchange Rate"
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Basic Premium(Original)"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Basic Premium (SGD)"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Loading Premium (Original)"
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Loading Premium (SGD)"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Discounted Premium (Original)"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Discounted Premium (SGD)"
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="GST (SGD)"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Basic Modal Premium"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Basic Total Premium (SGD)"
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Basic Shield Plan Premium"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Total Modal Premium (Basic + All Rider)"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-text-field
                                        label="Total Premium (Basic + All Rider)(SGD)"
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Reference Number"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
                                        label="Upgrade / Downgrade"
                                        outlined
                                      ></v-select>
                                    </v-col>
                                    <v-col class="d-flex" cols="12" sm="4">
                                      <v-select
                                        :items="items"
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
                                        label="Outlined textarea"
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
            <div class="d-flex justify-end">
              <v-btn class="next1" color="primary" @click="e1 = 2">Next</v-btn>

              <v-btn class="back1" color="secondary" @click="el = -1"
                >Back
              </v-btn>
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

            <v-btn color="secondary" @click="el = -2">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card class="mb-12" color="grey lighten-1" height="200px"
              ><h1>hello</h1></v-card
            >

            <v-btn color="primary" @click="e1 = 4">Next </v-btn>

            <v-btn color="secondary">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 5"> Next </v-btn>

            <v-btn color="secondary">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>
          <v-stepper-content step="5">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 6"> Next </v-btn>

            <v-btn color="secondary">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>
          <v-stepper-content step="6">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 7"> Next </v-btn>

            <v-btn color="secondary">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>

          <v-stepper-content step="7">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 8"> Next </v-btn>

            <v-btn color="secondary">Back</v-btn>
            <v-btn color="warning"> Save </v-btn>
          </v-stepper-content>
          <v-stepper-content step="8">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 8"> Next </v-btn>

            <v-btn color="secondary">Back</v-btn>
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
      e1: 1,
      index: -1,
      column: null,
      row: null,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      items: ["8000 - Financial Alliance Pte Ltd - Active"],
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
    check: function () {
      if (this.el >= 8) {
        this.el = 1;
      } else {
        var res = (this.el += 1);
        this.el = res;
      }
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
  color: blue;
  text-decoration: underline;
}
.back2 {
  margin-left: 1%;
}
.save2 {
  margin-left: 1%;
}
</style>
