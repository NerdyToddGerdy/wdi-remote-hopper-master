# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170517142855) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "commodities", force: :cascade do |t|
    t.string   "name"
    t.decimal  "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ledgers", force: :cascade do |t|
    t.integer  "trader_id"
    t.integer  "commodity_id"
    t.integer  "qty"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["commodity_id"], name: "index_ledgers_on_commodity_id", using: :btree
    t.index ["trader_id"], name: "index_ledgers_on_trader_id", using: :btree
  end

  create_table "traders", force: :cascade do |t|
    t.string   "name"
    t.decimal  "money"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "ledgers", "commodities"
  add_foreign_key "ledgers", "traders"
end
