class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.string :image_url, null: false
      t.integer :project_id, null: false

      t.timestamps
    end
    add_index :pictures, :image_url, unique: true
    add_index :pictures, :project_id
  end
end
