class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :party_name
      t.string :phone_num
      t.string :email
      t.string :password_digest

      t.timestamps null: false
    end
  end
end
