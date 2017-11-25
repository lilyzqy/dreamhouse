class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :projects, :user_id
  end
end
